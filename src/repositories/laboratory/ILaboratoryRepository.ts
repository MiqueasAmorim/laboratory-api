import { Laboratory } from "../../entities/Laboratory";
import { ISaveLaboratoryDTO } from "../../usecases/create-laboratory/ISaveLaboratoryDTO";
import { IUpdateLaboratoryDTO } from "../../usecases/update-laboratory/IUpdateLaboratoryDTO";

export interface ILaboratoryRepository {
    save(saveLaboratoryDTO: ISaveLaboratoryDTO): Promise<Laboratory>;
    findById(id: number): Promise<Laboratory>;
    findByActive(isActive: boolean): Promise<Laboratory[]>;
    update(laboratory: IUpdateLaboratoryDTO): Promise<void>;
    delete(laboratory: Laboratory): Promise<void>;
}