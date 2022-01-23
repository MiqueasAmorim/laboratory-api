import { getRepository } from "typeorm";
import { Address } from "../../../entities/Address";
import { ICreateAddressDTO } from "../../../usecases/ICreateAddressDTO";
import { IAddressRepository } from "../IAddressRepository";

export class TypeORMAddressRepository implements IAddressRepository {
    async save(createAddressDTO: ICreateAddressDTO): Promise<Address> {
        const examRepository = getRepository(Address);
        return await examRepository.save(createAddressDTO);
    }

    async findAllByActive(): Promise<Address[]> {
        throw new Error("Method not implemented.");
    }

    async update(address: Address): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async delete(address: Address): Promise<void> {
        throw new Error("Method not implemented.");
    }
}