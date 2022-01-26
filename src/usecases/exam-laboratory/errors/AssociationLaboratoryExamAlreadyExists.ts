import { ConflictError } from "../../../errors/ConflictError";

export class AssociationLaboratoryExamAlreadyExists extends ConflictError {
    constructor() {
        super('Association between laboratory and exam already exists')
    }
}