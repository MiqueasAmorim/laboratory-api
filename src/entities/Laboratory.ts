import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Address } from "./Address";
import { Exam } from "./Exam";

@Entity({name: 'laboratories'})
export class Laboratory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToOne(() => Address)
    @JoinColumn({
        name: 'address_id'
    })
    address: Address

    @Column({name: 'is_active'})
    isActive: boolean;
    
    @ManyToMany(() => Exam)
    @JoinTable()
    exams: Exam[]
}