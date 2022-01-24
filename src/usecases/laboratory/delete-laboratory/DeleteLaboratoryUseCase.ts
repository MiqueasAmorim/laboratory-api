import { ILaboratoryRepository } from "../../../repositories/laboratory/ILaboratoryRepository";
import { LaboratoryNotFound } from "../update-laboratory/errors/LaboratoryNotFound";

export class DeleteLaboratoryUseCase {
    constructor(
        private laboratoryRepository: ILaboratoryRepository,
    ) {}

    async execute(laboratoryId) {
        const laboratory = await this.laboratoryRepository.findById(laboratoryId);

        if (!laboratory) {
            throw new LaboratoryNotFound();
        }

        // TODO Remover as associações com exames

        return this.laboratoryRepository.delete(laboratory);
    }
}