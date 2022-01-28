import { Request, Response } from "express";
import { IUpdateExamDTO } from "./IUpdateExamDTO";
import { UpdateExamUseCase } from "./UpdateExamUseCase";

export class UpdateExamController {
    constructor(
        private updateLaboratoryUseCase: UpdateExamUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const updateExamDTO: IUpdateExamDTO = {
            id: Number(request.params.id),
            name: request.body.name,
            type: request.body.type,
            isActive: Boolean(request.body.is_active)
        }

        try {
            await this.updateLaboratoryUseCase.execute(updateExamDTO);

            return response.status(200).json({
                message: 'Exam updated successfully',
            });
        } catch (err) {
            return response.status(err.HTTPErrorCode || 500).json({
                message: err.message || 'Unexpected error.'
            });
        }
    }
}