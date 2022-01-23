import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Address } from "./Address";
import { Exam } from "./Exam";

@Entity()
export class Laboratory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToOne(() => Address)
    @JoinColumn()
    address: Address

    @Column()
    isActive: boolean;
    
    @ManyToMany(() => Exam)
    @JoinTable()
    exams: Exam[]
}