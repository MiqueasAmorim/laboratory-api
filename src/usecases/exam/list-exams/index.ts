import { TypeORMExamRepository } from "../../../repositories/exam/implementations/TypeORMExamRepository";
import { ListExamsController } from "./ListExamsController";
import { ListExamsUseCase } from "./ListExamsUseCase";

const typeORMExamRepository = new TypeORMExamRepository();


const listExamsUseCase = new ListExamsUseCase(
    typeORMExamRepository
);

const listExamsController = new ListExamsController(
    listExamsUseCase
);

export { listExamsUseCase, listExamsController }
