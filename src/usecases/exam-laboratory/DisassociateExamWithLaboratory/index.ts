import { TypeORMExamRepository } from "../../../repositories/exam/implementations/TypeORMExamRepository";
import { TypeORMLaboratoryRepository } from "../../../repositories/laboratory/implementations/TypeORMLaboratoryRepository";
import { TypeORMLaboratoryExamRepository } from "../../../repositories/laboratoryExam/implementations/TypeORMLaboratoryExamRepository";
import { DisassociateExamWithLaboratoryController } from "./DisassociateExamWithLaboratoryController";
import { DisassociateExamWithLaboratoryUseCase } from "./DisassociateExamWithLaboratoryUseCase";

const typeORMExamRepository = new TypeORMExamRepository();
const typeORMLaboratoryRepository = new TypeORMLaboratoryRepository();
const laboratoryExamRepository = new TypeORMLaboratoryExamRepository();

const disassociateExamWithLaboratoryUseCase = new DisassociateExamWithLaboratoryUseCase(
    typeORMExamRepository,
    typeORMLaboratoryRepository,
    laboratoryExamRepository
);

const disassociateExamWithLaboratoryController = new DisassociateExamWithLaboratoryController(
    disassociateExamWithLaboratoryUseCase
);

export { disassociateExamWithLaboratoryUseCase, disassociateExamWithLaboratoryController }