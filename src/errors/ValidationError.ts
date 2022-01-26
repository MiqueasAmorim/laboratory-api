import { HTTPError } from "./HTTPError";

export class ValidationError extends HTTPError {
    constructor(message: string) {
        super(400, message || 'Validation error');
    }
}