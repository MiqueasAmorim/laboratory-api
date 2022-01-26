import { HTTPError } from "./HTTPError";

export class ConflictError extends HTTPError {
    constructor(message: string) {
        super(409, message || 'Resource already exists');
    }
}