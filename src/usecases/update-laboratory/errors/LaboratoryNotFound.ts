import { NotFoundError } from "../../../errors/NotFoundError";

export class LaboratoryNotFound extends NotFoundError {
    constructor() {
        super('Laboratory not found');
    }
}