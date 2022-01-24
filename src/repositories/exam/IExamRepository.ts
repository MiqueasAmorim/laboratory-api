import { Exam } from "../../entities/Exam";
import { ISaveExamDTO } from "../../usecases/exam/create-exam/ISaveExamDTO";

export interface IExamRepository {
    save(saveExam: ISaveExamDTO): Promise<Exam>;
    // findById(id: number): Promise<Exam>;
    // findByActive(isActive: boolean): Promise<Exam[]>;
    // // update(examDTO: IUpdateExamDTO): Promise<void>;
    // delete(exam: Exam): Promise<void>;
}