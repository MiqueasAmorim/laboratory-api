import { ILaboratoryRepository } from "../../../repositories/laboratory/ILaboratoryRepository";
import { examRouter } from "../../../routers/examRouter";
import { DisassociateExamWithLaboratoryUseCase } from "../../exam-laboratory/DisassociateExamWithLaboratory/DisassociateExamWithLaboratoryUseCase";
import { ListExamsAssociatedWithLaboratoryUseCase } from "../list-associated-exams/ListExamsAssociatedWithLaboratoryUseCase";
import { LaboratoryNotFound } from "../update-laboratory/errors/LaboratoryNotFound";

export class DeleteLaboratoryUseCase {
    constructor(
        private laboratoryRepository: ILaboratoryRepository,
        private disassociateExamWithLaboratoryUseCase: DisassociateExamWithLaboratoryUseCase,
        private listExamsAssociatedWithLaboratoryUseCase: ListExamsAssociatedWithLaboratoryUseCase
    ) {}

    async execute(laboratoryId) {
        const laboratory = await this.laboratoryRepository.findById(laboratoryId);

        if (!laboratory) {
            throw new LaboratoryNotFound();
        }

        const associatedExams = await this.listExamsAssociatedWithLaboratoryUseCase.execute(laboratory.id);

        await Promise.all(associatedExams.map(associatedExam => {
            return this.disassociateExamWithLaboratoryUseCase.execute(associatedExam.id, laboratory.id);
        }));       

        return this.laboratoryRepository.delete(laboratory);
    }
}