import { IExamRepository } from "../../../repositories/exam/IExamRepository";
import { ExamNotFound } from "../errors/ExamNotFound";

export class DeleteExamUseCase {
    constructor(
        private examRepository: IExamRepository,
    ) {}

    async execute(examId) {
        const exam = await this.examRepository.findById(examId);

        if (!exam) {
            throw new ExamNotFound();
        }

        // TODO Remover as associações com laboratórios

        return this.examRepository.delete(exam);
    }
}