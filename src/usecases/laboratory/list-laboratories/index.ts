import { TypeORMLaboratoryRepository } from "../../../repositories/laboratory/implementations/TypeORMLaboratoryRepository";
import { ListLaboratoryController } from "./ListLaboratoriesController";
import { ListLaboratoriesUseCase } from "./ListLaboratoriesUseCase";

const typeORMLaboratoryRepository = new TypeORMLaboratoryRepository()

const listLaboratiresUseCase = new ListLaboratoriesUseCase(
    typeORMLaboratoryRepository,
);

const listLaboratoriesController = new ListLaboratoryController(
    listLaboratiresUseCase
);

export { listLaboratoriesController, listLaboratiresUseCase }