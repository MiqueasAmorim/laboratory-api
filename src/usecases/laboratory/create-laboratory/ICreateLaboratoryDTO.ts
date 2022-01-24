import { ICreateAddressDTO } from "../../ICreateAddressDTO";

export interface ICreateLaboratoryDTO {
    name: string;
    address: ICreateAddressDTO
}