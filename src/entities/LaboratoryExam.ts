import { Entity, JoinColumn, JoinTable, OneToOne, PrimaryColumn } from "typeorm";
import { Exam } from "./Exam";
import { Laboratory } from "./Laboratory";

@Entity({ name: 'laboratories_exams' })
export class LaboratoryExam {
    @PrimaryColumn()
    laboratory_id: number;

    @PrimaryColumn()
    exam_id: number;

    @OneToOne(() => Laboratory)
    @JoinColumn({ name: 'laboratory_id' })
    laboratory: Laboratory;

    @OneToOne(() => Exam)
    @JoinColumn({ name: 'exam_id' })
    exam: Exam;
}