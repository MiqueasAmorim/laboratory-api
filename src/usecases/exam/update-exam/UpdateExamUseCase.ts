import { IExamRepository } from "../../../repositories/exam/IExamRepository";
import { LaboratoryNotFound } from "../../laboratory/update-laboratory/errors/LaboratoryNotFound";
import { removeUndefinedProperties } from "../../utils/utilsObject";
import { IUpdateExamDTO } from "./IUpdateExamDTO";

export class UpdateExamUseCase {
    constructor(
        private examRepository: IExamRepository,
    ) {}

    async execute(updateExamDTO: IUpdateExamDTO): Promise<void> {
        removeUndefinedProperties(updateExamDTO);

        if (!updateExamDTO.name && !updateExamDTO.type && !updateExamDTO.isActive) {
            throw new Error('Nothing to update');
        }

        const exam = await this.examRepository.findById(updateExamDTO.id);

        if (!exam) {
            throw new LaboratoryNotFound();
        }

        return this.examRepository.update(updateExamDTO);
    }
}