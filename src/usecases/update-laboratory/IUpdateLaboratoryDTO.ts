import { Address } from "../../entities/Address";

export interface IUpdateLaboratoryDTO {
    id: number;
    name: string;
    isActive: boolean;
    address: Address
}