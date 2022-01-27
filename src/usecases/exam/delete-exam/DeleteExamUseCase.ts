import { IExamRepository } from "../../../repositories/exam/IExamRepository";
import { DisassociateExamWithLaboratoryUseCase } from "../../exam-laboratory/DisassociateExamWithLaboratory/DisassociateExamWithLaboratoryUseCase";
import { ExamNotFound } from "../errors/ExamNotFound";
import { ListLaboratoriesAssociatedWithExamUseCase } from "../list-associated-laboratories/ListLaboratoriesAssociatedWithExamUseCase";

export class DeleteExamUseCase {
    constructor(
        private examRepository: IExamRepository,
        private disassociateExamWithLaboratoryUseCase: DisassociateExamWithLaboratoryUseCase,
        private listLaboratoriesAssociatedWithExamUseCase: ListLaboratoriesAssociatedWithExamUseCase
    ) { }

    async execute(examId) {
        const exam = await this.examRepository.findById(examId);

        if (!exam) {
            throw new ExamNotFound();
        }

        const associatedLaboratories = await this.listLaboratoriesAssociatedWithExamUseCase.execute(exam.id);

        await Promise.all(associatedLaboratories.map(associatedLaboratory => {
            return this.disassociateExamWithLaboratoryUseCase.execute(exam.id, associatedLaboratory.id)
        }));

        return this.examRepository.delete(exam);
    }
}