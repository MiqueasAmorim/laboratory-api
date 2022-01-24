import { ILaboratoryRepository } from "../../repositories/laboratory/ILaboratoryRepository";

export class ListLaboratoriesUseCase {
    constructor(
        private laboratoryRepository: ILaboratoryRepository,
    ) {}

    async execute(isActive: boolean) {
        return this.laboratoryRepository.findByActive(isActive);
    }
}