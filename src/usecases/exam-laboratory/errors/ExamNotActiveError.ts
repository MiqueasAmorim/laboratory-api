import { ValidationError } from "../../../errors/ValidationError";

export class ExamNotActiveError extends ValidationError {
    constructor() {
        super('Exam is not active');
    }
}