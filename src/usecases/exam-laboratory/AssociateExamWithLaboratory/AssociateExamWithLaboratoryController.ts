import { Request, Response } from "express";
import { AssociateExamWithLaboratoryUseCase } from "./AssociateExamWithLaboratoryUseCase";

export class AssociateExamWithLaboratoryController {
    constructor(
        private associateExamWithLaboratoryUseCase: AssociateExamWithLaboratoryUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { exam_id: examId, laboratory_id: laboratoryId } = request.body;

        try {
            await this.associateExamWithLaboratoryUseCase.execute(examId, laboratoryId);
            
            return response.status(201).json({
                message: 'Association between exam and laboratory created successfully.'
            })
        } catch (err) {
            return response.status(err.HTTPErrorCode || 500).json({
                message: err.message || 'Unexpected error.'
            });
        }
    }
}