import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Laboratory } from "./Laboratory";

@Entity()
export class Address {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    number: number;

    @Column()
    street: string;

    @Column()
    neighborhood: string;

    @Column()
    city: string;    

    @Column()
    state: string;

    @Column()
    country: string;

    @Column()
    zipCode: number;

    @Column()
    complement: string;

    @Column()
    createdAt: Date

    @Column()
    updatedAt: Date

    @Column()
    deletedAt: Date

    @OneToOne(() => Laboratory)
    laboratory: Laboratory
}