import { Request, Response, Router } from 'express';
import { body } from 'express-validator';
import { associateExamWithLaboratoryController } from '../usecases/exam-laboratory/AssociateExamWithLaboratory';
import { checkValidationResult } from './utils/checkValidationResult';

const associationExamRepository = Router();

associationExamRepository.post(
    '/association-exam-laboratory',
    body('exam_id')
        .isInt({ min: 1 })
        .withMessage("id must be a integer greater than zero"),
    body('laboratory_id')
        .isInt({ min: 1 })
        .withMessage("id must be a integer greater than zero"),
    checkValidationResult,
    (req: Request, res: Response) => {
        return associateExamWithLaboratoryController.handle(req, res);
    }
)

export { associationExamRepository }
