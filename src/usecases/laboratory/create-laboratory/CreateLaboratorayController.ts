import { Request, Response } from "express";
import { CreateLaboratoryUseCase } from "./CreateLaboratoryUseCase";

export class CreateLaboratoryController {
    constructor(
        private createLaboratoryUseCase: CreateLaboratoryUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, address } = request.body;

        try {
            await this.createLaboratoryUseCase.execute({
                name,
                address
            });
            
            return response.status(201).json({
                message: 'Laboratory created successfully.'
            })
        } catch (err) {
            return response.status(err.HTTPErrorCode || 500).json({
                message: err.message || 'Unexpected error.'
            });
        }
    }
}