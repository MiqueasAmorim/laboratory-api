import { Request, Response } from "express";
import { ListExamsUseCase } from "./ListExamsUseCase";

export class ListExamsController {
    constructor(
        private listExamsUseCase: ListExamsUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const isActive = request.body.is_active;

        try {
            const exams = await this.listExamsUseCase.execute(isActive);

            if (exams.length === 0) {
                return response.status(404).json({
                    message: 'No exams found.'
                });
            }

            return response.status(200).json({
                message: 'Exams listed successfully.',
                exams
            });
        } catch (err) {
            return response.status(err.HTTPErrorCode || 500).json({
                message: err.message || 'Unexpected error.'
            });
        }
    }
}