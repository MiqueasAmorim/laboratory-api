import { getRepository } from "typeorm";
import { Exam } from "../../../entities/Exam";
import { ISaveExamDTO } from "../../../usecases/exam/create-exam/ISaveExamDTO";
import { IUpdateExamDTO } from "../../../usecases/exam/update-exam/IUpdateExamDTO";
import { IExamRepository } from "../IExamRepository";

export class TypeORMExamRepository implements IExamRepository {
    async save(saveExam: ISaveExamDTO): Promise<Exam> {
        const examRepository = getRepository(Exam);
        return examRepository.save(saveExam);
    }

    async findById(id: number): Promise<Exam> {
        const examRepository = getRepository(Exam);
        return examRepository.findOne(id);
    }

    async findByActive(isActive: boolean): Promise<Exam[]> {
        const examRepository = getRepository(Exam);
        return examRepository.find({ where: { isActive } });
    }

    
    async update(examDTO: IUpdateExamDTO): Promise<void> {
        const examRepository = getRepository(Exam);
        await examRepository.update(examDTO.id, {...examDTO});
    }

    async delete(exam: Exam): Promise<void> {
        const examRepository = getRepository(Exam);
        await examRepository.delete(exam);
    }
}