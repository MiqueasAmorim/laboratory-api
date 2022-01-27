import { Request, Response } from "express";
import { DisassociateExamWithLaboratoryUseCase } from "./DisassociateExamWithLaboratoryUseCase";

export class DisassociateExamWithLaboratoryController {
    constructor(
        private disassociateExamWithLaboratoryUseCase: DisassociateExamWithLaboratoryUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { exam_id: examId, laboratory_id: laboratoryId } = request.body;

        try {
            await this.disassociateExamWithLaboratoryUseCase.execute(examId, laboratoryId);
            
            return response.status(201).json({
                message: 'Association between exam and laboratory deleted successfully.'
            })
        } catch (err) {
            return response.status(err.HTTPErrorCode || 500).json({
                message: err.message || 'Unexpected error.'
            });
        }
    }
}