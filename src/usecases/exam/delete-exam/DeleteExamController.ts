import { Request, Response } from "express";
import { DeleteExamUseCase } from "./DeleteExamUseCase";

export class DeleteExamController {
    constructor(
        private deleteExamUseCase: DeleteExamUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const examId = parseInt(request.params.id);

        try {
            await this.deleteExamUseCase.execute(examId);

            return response.status(200).json({
                message: 'Exam deleted successfully',
            });
        } catch (err) {
            return response.status(err.HTTPErrorCode || 500).json({
                message: err.message || 'Unexpected error.'
            });
        }
    }
}