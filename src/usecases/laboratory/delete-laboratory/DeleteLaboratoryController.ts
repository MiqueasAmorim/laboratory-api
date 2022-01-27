import { Request, Response } from "express";
import { DeleteLaboratoryUseCase } from "./DeleteLaboratoryUseCase";

export class DeleteLaboratoryController {
    constructor(
        private deleteLaboratoryUseCase: DeleteLaboratoryUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const laboratoryId = parseInt(request.params.id);

        try {
            await this.deleteLaboratoryUseCase.execute(laboratoryId);

            return response.status(200).json({
                message: 'Laboratory deleted successfully',
            });
        } catch (err) {
            return response.status(err.HTTPErrorCode || 500).json({
                message: err.message || 'Unexpected error.'
            });
        }
    }
}