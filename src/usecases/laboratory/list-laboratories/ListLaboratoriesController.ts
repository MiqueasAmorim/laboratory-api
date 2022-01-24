import { Request, Response } from "express";
import { ListLaboratoriesUseCase } from "./ListLaboratoriesUseCase";

export class ListLaboratoryController {
    constructor(
        private listLaboratoriesUseCase: ListLaboratoriesUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const isActive = request.body.is_active;

        try {
            const laboratories = await this.listLaboratoriesUseCase.execute(isActive);
            
            if (laboratories.length === 0) {
                return response.status(404).json({
                    message: 'No laboratories found.'
                });
            }

            return response.status(200).json({
                message: 'Laboratories listed successfully.',
                laboratories
            });
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            });
        }
    }
}