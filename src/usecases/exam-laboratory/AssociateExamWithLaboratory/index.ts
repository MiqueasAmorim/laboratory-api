import { TypeORMExamRepository } from "../../../repositories/exam/implementations/TypeORMExamRepository";
import { TypeORMLaboratoryRepository } from "../../../repositories/laboratory/implementations/TypeORMLaboratoryRepository";
import { TypeORMLaboratoryExamRepository } from "../../../repositories/laboratoryExam/implementations/TypeORMLaboratoryExamRepository";
import { AssociateExamWithLaboratoryController } from "./AssociateExamWithLaboratoryController";
import { AssociateExamWithLaboratoryUseCase } from "./AssociateExamWithLaboratoryUseCase";

const typeORMExamRepository = new TypeORMExamRepository();
const typeORMLaboratoryRepository = new TypeORMLaboratoryRepository();
const laboratoryExamRepository = new TypeORMLaboratoryExamRepository();

const associateExamWithLaboratoryUseCase = new AssociateExamWithLaboratoryUseCase(
    typeORMExamRepository,
    typeORMLaboratoryRepository,
    laboratoryExamRepository
);

const associateExamWithLaboratoryController = new AssociateExamWithLaboratoryController(
    associateExamWithLaboratoryUseCase
);

export { associateExamWithLaboratoryUseCase, associateExamWithLaboratoryController }