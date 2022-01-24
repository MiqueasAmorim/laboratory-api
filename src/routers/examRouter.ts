import { Request, Response, Router } from 'express';
import { body } from 'express-validator';
import { ExamTypeEnum } from '../entities/enums/ExamTypeEnum';
import { createExamController } from '../usecases/exam/create-exam';
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

export { examRouter }
