import { associationExamRepository } from "./associationExamRepositoryRouter";
import { examRouter } from "./examRouter";
import { laboratoryRouter } from "./laboratoryRouter";

export default [
    laboratoryRouter,
    examRouter,
    associationExamRepository
]