import { getRepository } from "typeorm";
import { Laboratory } from "../../../entities/Laboratory";
import { ISaveLaboratoryDTO } from "../../../usecases/laboratory/create-laboratory/ISaveLaboratoryDTO";
import { ILaboratoryRepository } from "../ILaboratoryRepository";

export class TypeORMLaboratoryRepository implements ILaboratoryRepository {
    async save(saveLaboratoryDTO: ISaveLaboratoryDTO): Promise<Laboratory> {
        const laboratoryRepository = getRepository(Laboratory);
        return laboratoryRepository.save(saveLaboratoryDTO);
    }

    async findById(id: number): Promise<Laboratory> {
        const laboratoryRepository = getRepository(Laboratory);
        return laboratoryRepository.findOne({ where: { id }, relations: ['address'] });
    }

    async findByActive(isActive: boolean): Promise<Laboratory[]> {
        const laboratoryRepository = getRepository(Laboratory);
        return laboratoryRepository.find({ where: { isActive }, relations: ['address'] });
    }

    async update(laboratory: Laboratory): Promise<void> {
        const laboratoryRepository = getRepository(Laboratory);
        await laboratoryRepository.update(laboratory.id, { ...laboratory });
    }

    async delete(laboratory: Laboratory): Promise<void> {
        const laboratoryRepository = getRepository(Laboratory);
        await laboratoryRepository.delete(laboratory);
    }
}