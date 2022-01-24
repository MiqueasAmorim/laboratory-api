import { Request, Response } from "express";
import { IUpdateLaboratoryDTO } from "./IUpdateLaboratoryDTO";
import { UpdateLaboratoryUseCase } from "./UpdateLaboratoryUseCase";

export class UpdateLaboratoryController {
    constructor(
        private updateLaboratoryUseCase: UpdateLaboratoryUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const laboratory: IUpdateLaboratoryDTO = {
            id: Number(request.params.id),
            name: request.body.name,
            isActive: request.body.is_active,
            address: request.body.address
        }

        try {
            await this.updateLaboratoryUseCase.execute(laboratory);

            return response.status(200).json({
                message: 'Laboratory updated successfully',
            });
        } catch (err) {
            return response.status(err.HTTPErrorCode || 400).json({
                message: err.message || 'Unexpected error.'
            });
        }
    }
}