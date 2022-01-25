import { TypeORMExamRepository } from "../../../repositories/exam/implementations/TypeORMExamRepository";
import { UpdateExamController } from "./UpdateExamController";
import { UpdateExamUseCase } from "./UpdateExamUseCase";

const typeORMExamRepository = new TypeORMExamRepository();


const updateExamUseCase = new UpdateExamUseCase(
    typeORMExamRepository
);

const updateExamController = new UpdateExamController(
    updateExamUseCase
);

export { updateExamUseCase, updateExamController }
