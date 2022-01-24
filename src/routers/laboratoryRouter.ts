import { Request, Response, Router } from 'express';
import { body, param } from 'express-validator';
import { createLaboratoryController } from '../usecases/laboratory/create-laboratory';
import { deleteLaboratoryController } from '../usecases/laboratory/delete-laboratory';
import { listLaboratoriesController } from '../usecases/laboratory/list-laboratories';
import { updateLaboratoryController } from '../usecases/laboratory/update-laboratory';
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

laboratoryRouter.get(
    '/laboratories',
    body('is_active').isBoolean().withMessage("is_active must be a boolean"),
    checkValidationResult,
    (req: Request, res: Response) => {
        return listLaboratoriesController.handle(req, res);
    });

laboratoryRouter.put(
    '/laboratories/:id',
    param('id').isInt({ min: 1 }).withMessage("id must be a integer greater than zero"),
    body('address').optional().notEmpty()
        .isObject().withMessage('address must be a object'),
    body('address.number').optional()
        .isInt({ min: 1 }).withMessage('address.number must be a integer greater than zero'),
    body('address.street').optional()
        .notEmpty().withMessage('address.street must not be empty')
        .isString().withMessage('address.street must be a string'),
    body('address.city').optional()
        .notEmpty().withMessage('address.city must not be empty')
        .isString().withMessage('address.city must be a string'),
    body('address.neighborhood').optional()
        .notEmpty().withMessage('address.neighborhood must not be empty')
        .isString().withMessage('address.neighborhood must be a string'),
    body('address.state').optional()
        .notEmpty().withMessage('address.state must not be empty')
        .isString().withMessage('address.state must be a string'),
    body('address.zipCode').optional()
        .isInt({ min: 1 }).withMessage('address.number must be a integer greater than zero'),
    checkValidationResult,
    (req: Request, res: Response) => {
        return updateLaboratoryController.handle(req, res);
    });

laboratoryRouter.delete(
    '/laboratories/:id',
    param('id').isInt({ min: 1 }).withMessage("id must be a integer greater than zero"),
    checkValidationResult,
    (req: Request, res: Response) => {
        return deleteLaboratoryController.handle(req, res);
    });


export { laboratoryRouter }