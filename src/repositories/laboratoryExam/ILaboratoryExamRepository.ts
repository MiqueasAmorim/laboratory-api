import { Exam } from "../../entities/Exam";
import { Laboratory } from "../../entities/Laboratory";
import { LaboratoryExam } from "../../entities/LaboratoryExam";

export interface ILaboratoryExamRepository {
    saveAssociation(laboratory: Laboratory, exam: Exam): Promise<LaboratoryExam>;
    findAssociation(laboratory: Laboratory, exam: Exam): Promise<LaboratoryExam>;
    findAssociatedExams(laboratoryId: number): Promise<Exam[]>;
    findAssociatedLaboratories(examId: number): Promise<Laboratory[]>
    deleteAssociation(laboratoryExam: LaboratoryExam): Promise<void>;
}