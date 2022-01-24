import { TypeORMLaboratoryRepository } from "../../../repositories/laboratory/implementations/TypeORMLaboratoryRepository";
import { UpdateLaboratoryController } from "./UpdateLaboratoryController";
import { UpdateLaboratoryUseCase } from "./UpdateLaboratoryUseCase";

const typeORMLaboratoryRepository = new TypeORMLaboratoryRepository()

const updateLaboratoryUseCase= new UpdateLaboratoryUseCase(
    typeORMLaboratoryRepository
);

const updateLaboratoryController = new UpdateLaboratoryController(
    updateLaboratoryUseCase
);

export { updateLaboratoryController, updateLaboratoryUseCase }