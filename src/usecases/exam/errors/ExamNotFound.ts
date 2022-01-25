import { NotFoundError } from "../../../errors/NotFoundError";

export class ExamNotFound extends NotFoundError {
    constructor() {
        super('Exam not found');
    }
}