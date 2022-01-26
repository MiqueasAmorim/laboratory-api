import { Address } from "../../entities/Address";
import { ICreateAddressDTO } from "../../usecases/laboratory/ICreateAddressDTO";

export interface IAddressRepository {
    save(createAddressDTO: ICreateAddressDTO): Promise<Address>;
    findAllByActive(): Promise<Address[]>;
    update(address: Address): Promise<void>;
    delete(address: Address): Promise<void>;
}