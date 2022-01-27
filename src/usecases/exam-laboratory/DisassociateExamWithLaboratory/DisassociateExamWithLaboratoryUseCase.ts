import { IExamRepository } from "../../../repositories/exam/IExamRepository";
import { ILaboratoryRepository } from "../../../repositories/laboratory/ILaboratoryRepository";
import { ILaboratoryExamRepository } from "../../../repositories/laboratoryExam/ILaboratoryExamRepository";
import { ExamNotFound } from "../../exam/errors/ExamNotFound";
import { LaboratoryNotFound } from "../../laboratory/update-laboratory/errors/LaboratoryNotFound";
import { AssociationLaboratoryExamNotFound } from "../errors/AssociationLaboratoryExamNotFoundError";

export class DisassociateExamWithLaboratoryUseCase {
    constructor(
        private examRepository: IExamRepository,
        private laboratoryRepository: ILaboratoryRepository,
        private laboratoryExamRepository: ILaboratoryExamRepository
    ) { }

    async execute(examId: number, laboratoryId: number) {
        const exam = await this.examRepository.findById(examId);

        if (!exam) {
            throw new ExamNotFound();
        }

        const laboratory = await this.laboratoryRepository.findById(laboratoryId);

        if (!laboratory) {
            throw new LaboratoryNotFound();
        }

        const laboratoryExam = await this.laboratoryExamRepository.findAssociation(laboratory, exam);

        if (!laboratoryExam) {
            throw new AssociationLaboratoryExamNotFound();
        }

        await this.laboratoryExamRepository.deleteAssociation(laboratoryExam);
    }
}