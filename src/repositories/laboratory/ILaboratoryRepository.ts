import { Laboratory } from "../../entities/Laboratory";
import { ISaveLaboratoryDTO } from "../../usecases/create-laboratory/ISaveLaboratoryDTO";

export interface ILaboratoryRepository {
    save(saveLaboratoryDTO: ISaveLaboratoryDTO): Promise<Laboratory>;
    findAllByActive(): Promise<Laboratory[]>;
    update(laboratory: Laboratory): Promise<void>;
    delete(laboratory: Laboratory): Promise<void>;
}