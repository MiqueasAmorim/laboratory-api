import { Request, Response, Router } from 'express';
import { body } from 'express-validator';
import { createLaboratoryController } from '../usecases/create-laboratory';
import { checkValidationResult } from './utils/checkValidationResult';

const laboratoryRouter = Router();

const bodyValidators = [
    body('name')
        .isString().withMessage('name must be a string'),
    body('address')
        .isObject().withMessage('address must be a object'),
    body('address.number')
        .isInt({ min: 1 }).withMessage('address.number must be a integer greater than zero'),
    body('address.street')
        .notEmpty().withMessage('address.street must not be empty')
        .isString().withMessage('address.street must be a string'),
    body('address.city')
        .notEmpty().withMessage('address.city must not be empty')
        .isString().withMessage('address.city must be a string'),
    body('address.neighborhood')
        .notEmpty().withMessage('address.neighborhood must not be empty')
        .isString().withMessage('address.neighborhood must be a string'),
    body('address.state')
        .notEmpty().withMessage('address.state must not be empty')
        .isString().withMessage('address.state must be a string'),
    body('address.zipCode')
        .isInt({ min: 1 }).withMessage('address.number must be a integer greater than zero')
]

laboratoryRouter.post(
    '/laboratories',
    bodyValidators,
    checkValidationResult,
    (req: Request, res: Response) => {
        return createLaboratoryController.handle(req, res);
    });

export { laboratoryRouter }