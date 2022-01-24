import { getRepository } from "typeorm";
import { Laboratory } from "../../../entities/Laboratory";
import { ISaveLaboratoryDTO } from "../../../usecases/create-laboratory/ISaveLaboratoryDTO";
import { ILaboratoryRepository } from "../ILaboratoryRepository";

export class TypeORMLaboratoryRepository implements ILaboratoryRepository {
    async save(saveLaboratoryDTO: ISaveLaboratoryDTO): Promise<Laboratory> {
        const laboratoryRepository = getRepository(Laboratory);
        return laboratoryRepository.save(saveLaboratoryDTO);
    }

    async findByActive(isActive: boolean): Promise<Laboratory[]> {
        const laboratoryRepository = getRepository(Laboratory);
        return laboratoryRepository.find({ where: {isActive}, relations: ['address'] });
    }

    async update(laboratory: Laboratory): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async delete(laboratory: Laboratory): Promise<void> {
        throw new Error("Method not implemented.");
    }
}