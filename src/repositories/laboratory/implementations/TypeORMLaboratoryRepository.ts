import { getRepository } from "typeorm";
import { Laboratory } from "../../../entities/Laboratory";
import { ISaveLaboratoryDTO } from "../../../usecases/create-laboratory/ISaveLaboratoryDTO";
import { ILaboratoryRepository } from "../ILaboratoryRepository";

export class TypeORMLaboratoryRepository implements ILaboratoryRepository {
    async save(saveLaboratoryDTO: ISaveLaboratoryDTO): Promise<Laboratory> {
        const laboratoryRepository = getRepository(Laboratory);
        return await laboratoryRepository.save(saveLaboratoryDTO);
    }

    async findAllByActive(): Promise<Laboratory[]> {
        throw new Error("Method not implemented.");
    }

    async update(laboratory: Laboratory): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
    async delete(laboratory: Laboratory): Promise<void> {
        throw new Error("Method not implemented.");
    }
}