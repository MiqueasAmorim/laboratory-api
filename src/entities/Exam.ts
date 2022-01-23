import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ExamTypeEnum } from "./enums/ExamTypeEnum";
import { Laboratory } from "./Laboratory";

@Entity()
export class Exam {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({
        type: "enum",
        enum: ExamTypeEnum
    })
    type: ExamTypeEnum

    @Column()
    isActive: boolean

    @Column()
    createdAt: Date

    @Column()
    updatedAt: Date

    @Column()
    deletedAt: Date

    @ManyToMany(() => Laboratory)
    laboratories: Laboratory[]
}