import { ConflictError } from "../../../errors/ConflictError";

export class AssociationLaboratoryExamAlreadyExistsError extends ConflictError {
    constructor() {
        super('Association between laboratory and exam already exists')
    }
}