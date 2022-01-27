import { Exam } from "../../../entities/Exam";
import { ILaboratoryExamRepository } from "../../../repositories/laboratoryExam/ILaboratoryExamRepository";

export class ListExamsAssociatedWithLaboratoryUseCase {
    constructor(
        private examLaboratoryRepository: ILaboratoryExamRepository,
    ) {}

    async execute(laboratoryId: number): Promise<Exam[]> {
        return this.examLaboratoryRepository.findAssociatedExams(laboratoryId);
    }
}