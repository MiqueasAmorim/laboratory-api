import { ILaboratoryRepository } from "../../../repositories/laboratory/ILaboratoryRepository";
import { LaboratoryNotFound } from "./errors/LaboratoryNotFound";
import { IUpdateLaboratoryDTO } from "./IUpdateLaboratoryDTO";

export class UpdateLaboratoryUseCase {
    constructor(
        private laboratoryRepository: ILaboratoryRepository,
    ) {}

    async execute(updateLaboratory: IUpdateLaboratoryDTO) {
        const laboratory = await this.laboratoryRepository.findById(updateLaboratory.id);

        if (!laboratory) {
            throw new LaboratoryNotFound();
        }

        if (updateLaboratory.address || updateLaboratory.address) {
            laboratory.address = {...updateLaboratory.address}
        } else {
            delete updateLaboratory.address;
        }
        
        return this.laboratoryRepository.update(updateLaboratory);
    }
}