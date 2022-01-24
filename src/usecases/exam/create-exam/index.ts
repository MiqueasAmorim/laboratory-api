import { TypeORMExamRepository } from "../../../repositories/exam/implementations/TypeORMExamRepository";
import { CreateExamController } from "./CreateExamController";
import { CreateExamUseCase } from "./CreateExamUseCase";

const typeORMExamRepository = new TypeORMExamRepository();

const createExamUseCase = new CreateExamUseCase(
    typeORMExamRepository
);

const createExamController = new CreateExamController(
    createExamUseCase
);

export { createExamUseCase, createExamController }