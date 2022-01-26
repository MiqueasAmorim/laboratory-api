import { IExamRepository } from "../../../repositories/exam/IExamRepository";
import { ILaboratoryRepository } from "../../../repositories/laboratory/ILaboratoryRepository";
import { ILaboratoryExamRepository } from "../../../repositories/laboratoryExam/ILaboratoryExamRepository";
import { ExamNotFound } from "../../exam/errors/ExamNotFound";
import { LaboratoryNotFound } from "../../laboratory/update-laboratory/errors/LaboratoryNotFound";
import { AssociationLaboratoryExamAlreadyExists } from "../errors/AssociationLaboratoryExamAlreadyExists";
import { ExamNotActiveError } from "../errors/ExamNotActiveError";
import { LaboratoryNotActiveError } from "../errors/LaboratoryNotActiveError";

export class AssociateExamWithLaboratoryUseCase {
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

        if (!exam.isActive) {
            throw new ExamNotActiveError()
        }

        const laboratory = await this.laboratoryRepository.findById(laboratoryId);

        if (!laboratory) {
            throw new LaboratoryNotFound();
        }

        if (!laboratory.isActive) {
            throw new LaboratoryNotActiveError();
        }

        const laboratoryExam = await this.laboratoryExamRepository.findAssociation(laboratory, exam);

        if (laboratoryExam) {
            throw new AssociationLaboratoryExamAlreadyExists();
        }

        await this.laboratoryExamRepository.saveAssociation(laboratory, exam);
    }
}