interface info {
    title: string;
    status: true;
    id: number;
}
interface name {
    firstname: string;
    lastname?: string;
}
declare const getName: ({ firstname, lastname }: name) => string;
interface Address {
    houseNumber: number;
    street: string;
    city: string;
    state: string;
    postalCode: number;
    country: string;
}
interface personalDetails {
    prefix?: string;
    phones: Array<number> | number[];
    address: Array<object> | string[];
    email?: string;
    firstName: string;
    lastName: string;
    middleName?: string;
}
declare const arr: personalDetails;
declare function PhoneBook({ prefix, phones, address, email, firstName, lastName, middleName }: personalDetails): any;
