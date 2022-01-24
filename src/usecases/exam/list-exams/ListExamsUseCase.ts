import { Exam } from "../../../entities/Exam";
import { IExamRepository } from "../../../repositories/exam/IExamRepository";

export class ListExamsUseCase {
    constructor(
        private examRepository: IExamRepository,
    ) {}

    async execute(isActive: boolean): Promise<Exam[]> {
        return this.examRepository.findByActive(isActive);
    }
}