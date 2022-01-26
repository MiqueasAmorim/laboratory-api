import { ValidationError } from "../../../errors/ValidationError";

export class LaboratoryNotActiveError extends ValidationError {
    constructor() {
        super('Laboratory is not active');
    }
}