import { getRepository } from "typeorm";
import { Exam } from "../../../entities/Exam";
import { Laboratory } from "../../../entities/Laboratory";
import { LaboratoryExam } from "../../../entities/LaboratoryExam";
import { ILaboratoryExamRepository } from "../ILaboratoryExamRepository";

export class TypeORMLaboratoryExamRepository implements ILaboratoryExamRepository {
    async saveAssociation(laboratory: Laboratory, exam: Exam): Promise<LaboratoryExam> {
        return getRepository(LaboratoryExam).save({
            laboratory_id: laboratory.id,
            exam_id: exam.id
        });
    }

    async findAssociation(laboratory: Laboratory, exam: Exam): Promise<LaboratoryExam> {
        return getRepository(LaboratoryExam).findOne({
            where: {
                laboratory_id: laboratory.id,
                exam_id: exam.id
            }
        });
    }

    async findAssociatedExams(laboratoryId: number): Promise<Exam[]> {
        const laboratoryExamList = await getRepository(LaboratoryExam).find({ 
            where: { laboratory_id: laboratoryId },
            relations: ['exam']
        });

        return laboratoryExamList.map(labExam => labExam.exam)
    }

    async findAssociatedLaboratories(examId: number): Promise<Laboratory[]> {
        const laboratoryExamList = await getRepository(LaboratoryExam).find({ 
            where: { exam_id: examId },
            relations: ['laboratory']
        });

        return laboratoryExamList.map(labExam => labExam.laboratory);
    }

}