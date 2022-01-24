import { IExamRepository } from "../../../repositories/exam/IExamRepository";
import { ISaveExamDTO } from "./ISaveExamDTO";

export class CreateExamUseCase {
    constructor(
        private examRepository: IExamRepository,
    ) {}

    async execute(saveExamDTO: ISaveExamDTO) {
        return this.examRepository.save(saveExamDTO);
    }
}