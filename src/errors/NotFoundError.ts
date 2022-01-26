import { HTTPError } from "./HTTPError";

export class NotFoundError extends HTTPError {
    constructor(message: string) {
        super(404, message || 'Resource not found');
    }
}