import { Laboratory } from "../../../entities/Laboratory";
import { ILaboratoryExamRepository } from "../../../repositories/laboratoryExam/ILaboratoryExamRepository";

export class ListLaboratoriesAssociatedWithExamUseCase {
    constructor(
        private examLaboratoryRepository: ILaboratoryExamRepository,
    ) { }

    async execute(laboratoryId: number): Promise<Laboratory[]> {
        return this.examLaboratoryRepository.findAssociatedLaboratories(laboratoryId);
    }
}