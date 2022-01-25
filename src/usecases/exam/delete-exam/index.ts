import { TypeORMExamRepository } from "../../../repositories/exam/implementations/TypeORMExamRepository";
import { DeleteExamController } from "./DeleteExamController";
import { DeleteExamUseCase } from "./DeleteExamUseCase";

const typeORMExamRepository = new TypeORMExamRepository();


const deleteExamUseCase = new DeleteExamUseCase(
    typeORMExamRepository
);

const deleteExamController = new DeleteExamController(
    deleteExamUseCase
);

export { deleteExamUseCase, deleteExamController }
