import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Laboratory } from "./Laboratory";

@Entity({ name: 'addresses' })
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

    @Column({
        name: 'zip_code'
    })
    zipCode: number;

    @Column()
    complement: string;

    @OneToOne(() => Laboratory)
    laboratory: Laboratory
}