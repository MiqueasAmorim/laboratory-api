import { TypeORMAddressRepository } from "../../repositories/address/implementations/TypeORMAddressRepository";
import { TypeORMLaboratoryRepository } from "../../repositories/laboratory/implementations/TypeORMLaboratoryRepository";
import { CreateLaboratoryController } from "./CreateLaboratorayController";
import { CreateLaboratoryUseCase } from "./CreateLaboratoryUseCase";

const typeORMLaboratoryRepository = new TypeORMLaboratoryRepository()
const typeORMAddressRepository = new TypeORMAddressRepository();

const createLaboratoryUseCase = new CreateLaboratoryUseCase(
    typeORMLaboratoryRepository,
    typeORMAddressRepository
);

const createLaboratoryController = new CreateLaboratoryController(
    createLaboratoryUseCase
);

export { createLaboratoryController, createLaboratoryUseCase }