import { TypeORMExamRepository } from "../../../repositories/exam/implementations/TypeORMExamRepository";
import { TypeORMLaboratoryRepository } from "../../../repositories/laboratory/implementations/TypeORMLaboratoryRepository";
import { TypeORMLaboratoryExamRepository } from "../../../repositories/laboratoryExam/implementations/TypeORMLaboratoryExamRepository";
import { DisassociateExamWithLaboratoryUseCase } from "../../exam-laboratory/DisassociateExamWithLaboratory/DisassociateExamWithLaboratoryUseCase";
import { ListExamsAssociatedWithLaboratoryUseCase } from "../list-associated-exams/ListExamsAssociatedWithLaboratoryUseCase";
import { DeleteLaboratoryController } from "./DeleteLaboratoryController";
import { DeleteLaboratoryUseCase } from "./DeleteLaboratoryUseCase";

const typeORMExamRepository = new TypeORMExamRepository();
const typeORMLaboratoryRepository = new TypeORMLaboratoryRepository();
const laboratoryExamRepository = new TypeORMLaboratoryExamRepository();

const disassociateExamWithLaboratoryUseCase = new DisassociateExamWithLaboratoryUseCase(
    typeORMExamRepository,
    typeORMLaboratoryRepository,
    laboratoryExamRepository
);

const listExamsAssociatedWithLaboratoryUseCase = new ListExamsAssociatedWithLaboratoryUseCase(
    laboratoryExamRepository
);

const deleteLaboratoryUseCase = new DeleteLaboratoryUseCase(
    typeORMLaboratoryRepository,
    disassociateExamWithLaboratoryUseCase,
    listExamsAssociatedWithLaboratoryUseCase
);

const deleteLaboratoryController = new DeleteLaboratoryController(
    deleteLaboratoryUseCase
);

export { deleteLaboratoryController, deleteLaboratoryUseCase }
