import { NotFoundError } from "../../../errors/NotFoundError";

export class AssociationLaboratoryExamNotFound extends NotFoundError {
    constructor(){
        super('Association between laboratory and exam not found')
    }
}