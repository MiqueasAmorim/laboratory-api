import { IAddressRepository } from "../../repositories/address/IAddressRepository";
import { ILaboratoryRepository } from "../../repositories/laboratory/ILaboratoryRepository";
import { ICreateLaboratoryDTO } from "./ICreateLaboratoryDTO";

export class CreateLaboratoryUseCase {
    constructor(
        private laboratoryRepository: ILaboratoryRepository,
        private addressRepository: IAddressRepository
    ) {}

    async execute(createLaboratoryDTO: ICreateLaboratoryDTO) {
        const address = await this.addressRepository.save(createLaboratoryDTO.address);
        await this.laboratoryRepository.save({
            name: createLaboratoryDTO.name,
            address
        });
    }
}