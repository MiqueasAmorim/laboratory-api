import { Request, Response } from "express";
import { CreateExamUseCase } from "./CreateExamUseCase";

export class CreateExamController {
    constructor(
        private createExamUseCase: CreateExamUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, type } = request.body;

        try {
            await this.createExamUseCase.execute({
                name,
                type
            });
            
            return response.status(201).json({
                message: 'Exam created successfully.'
            })
        } catch (err) {
            return response.status(400).json({
                message: err.message || 'Unexpected error.'
            });
        }
    }
}