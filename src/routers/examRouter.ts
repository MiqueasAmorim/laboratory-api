import { Request, Response, Router } from 'express';
import { body, param } from 'express-validator';
import { ExamTypeEnum } from '../entities/enums/ExamTypeEnum';
import { createExamController } from '../usecases/exam/create-exam';
import { deleteExamController } from '../usecases/exam/delete-exam';
import { listExamsController } from '../usecases/exam/list-exams';
import { updateExamController } from '../usecases/exam/update-exam';
import { checkValidationResult } from "./utils/checkValidationResult";

const examRouter = Router();

// const examTypesEnumValues = () => {
//     let valuesInString = '';
//     for (const value in ExamTypeEnum) {
//         valuesInString += `${value},`
//     }

//     return valuesInString;
// }

const bodyValidators = [
    body('name')
        .isString().withMessage('name must be a string'),
    body('type')
        .isIn([ExamTypeEnum.ClinicalAnalysis, ExamTypeEnum.Image])
        .withMessage(`type must be one of those types (${ExamTypeEnum.ClinicalAnalysis}, ${ExamTypeEnum.Image})`),
];

examRouter.post(
    '/exams',
    bodyValidators,
    checkValidationResult,
    (req: Request, res: Response) => {
        return createExamController.handle(req, res);
    });

examRouter.get(
    '/exams',
    body('is_active').isBoolean().withMessage("is_active must be a boolean"),
    checkValidationResult,
    (req: Request, res: Response) => {
        return listExamsController.handle(req, res);
    });

examRouter.put(
    '/exams/:id',
    body('name').optional()
        .isString().withMessage('name must be a string'),
    body('type').optional()
        .isIn([ExamTypeEnum.ClinicalAnalysis, ExamTypeEnum.Image])
        .withMessage(`type must be one of those types (${ExamTypeEnum.ClinicalAnalysis}, ${ExamTypeEnum.Image})`),
    body('is_active').optional()
        .isBoolean().withMessage("is_active must be a boolean"),
    checkValidationResult,
    (req: Request, res: Response) => {
        return updateExamController.handle(req, res);
    });

examRouter.delete(
    '/exams/:id',
    param('id').isInt({ min: 1 }).withMessage("id must be a integer greater than zero"),
    checkValidationResult,
    (req: Request, res: Response) => {
        return deleteExamController.handle(req, res);
    });

export { examRouter }
