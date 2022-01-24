import { getRepository } from "typeorm";
import { Exam } from "../../../entities/Exam";
import { ISaveExamDTO } from "../../../usecases/exam/create-exam/ISaveExamDTO";
import { IExamRepository } from "../IExamRepository";

export class TypeORMExamRepository implements IExamRepository {
    async save(saveExam: ISaveExamDTO): Promise<Exam> {
        const examRepository = getRepository(Exam);
        return examRepository.save(saveExam);
    }

    async findByActive(isActive: boolean): Promise<Exam[]> {
        const examRepository = getRepository(Exam);
        return examRepository.find({ where: { isActive } });
    }
}