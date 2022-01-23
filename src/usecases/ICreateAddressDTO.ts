export interface ICreateAddressDTO {
   number: number;
   street: string;
   neighborhood: string;
   city: string;    
   state: string;
   country: string;
   zipCode: number;
   complement?: string;
}