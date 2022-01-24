import { TypeORMLaboratoryRepository } from "../../../repositories/laboratory/implementations/TypeORMLaboratoryRepository";
import { DeleteLaboratoryController } from "./DeleteLaboratoryController";
import { DeleteLaboratoryUseCase } from "./DeleteLaboratoryUseCase";

const typeORMLaboratoryRepository = new TypeORMLaboratoryRepository();

const deleteLaboratoryUseCase = new DeleteLaboratoryUseCase(
    typeORMLaboratoryRepository
);

const deleteLaboratoryController = new DeleteLaboratoryController(
    deleteLaboratoryUseCase
);

export { deleteLaboratoryController, deleteLaboratoryUseCase }
