import { TypeORMExamRepository } from "../../../repositories/exam/implementations/TypeORMExamRepository";
import { TypeORMLaboratoryRepository } from "../../../repositories/laboratory/implementations/TypeORMLaboratoryRepository";
import { TypeORMLaboratoryExamRepository } from "../../../repositories/laboratoryExam/implementations/TypeORMLaboratoryExamRepository";
import { DisassociateExamWithLaboratoryUseCase } from "../../exam-laboratory/DisassociateExamWithLaboratory/DisassociateExamWithLaboratoryUseCase";
import { ListExamsAssociatedWithLaboratoryUseCase } from "../../laboratory/list-associated-exams/ListExamsAssociatedWithLaboratoryUseCase";
import { ListLaboratoriesAssociatedWithExamUseCase } from "../list-associated-laboratories/ListLaboratoriesAssociatedWithExamUseCase";
import { DeleteExamController } from "./DeleteExamController";
import { DeleteExamUseCase } from "./DeleteExamUseCase";

const typeORMExamRepository = new TypeORMExamRepository();
const typeORMLaboratoryRepository = new TypeORMLaboratoryRepository();
const laboratoryExamRepository = new TypeORMLaboratoryExamRepository();

const disassociateExamWithLaboratoryUseCase = new DisassociateExamWithLaboratoryUseCase(
    typeORMExamRepository,
    typeORMLaboratoryRepository,
    laboratoryExamRepository
);

const listLaboratoriesAssociatedWithExamUseCase = new ListLaboratoriesAssociatedWithExamUseCase(
    laboratoryExamRepository
);

const deleteExamUseCase = new DeleteExamUseCase(
    typeORMExamRepository,
    disassociateExamWithLaboratoryUseCase,
    listLaboratoriesAssociatedWithExamUseCase
);

const deleteExamController = new DeleteExamController(
    deleteExamUseCase
);

export { deleteExamUseCase, deleteExamController }
