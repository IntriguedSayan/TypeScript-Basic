declare type name = string;
declare let myName: name;
declare type age = number;
declare let myAge: age;
declare type isFetching = boolean;
declare let fetchStatus: isFetching;
declare const arr: number[];
declare const arrStr: Array<string>;
declare const firstTuple: [string, boolean];
declare enum Users {
    User = 0,
    SuperUser = 1,
    Admin = 2,
    SuperAdmin = 3
}
declare const firstTypeScriptFunction: (x: number, y: number) => number;
declare function printName(name: string): void;
interface stats {
    id: number;
    status: boolean;
    title: string;
}
declare const obj: stats;
declare type nameDetails = {
    firstname: string;
    lastname?: string;
};
declare const getName: ({ firstname, lastname }: nameDetails) => string;
interface Address {
    houseNumber: number;
    street: string;
    city: string;
    state: string;
    postalCode: number;
    country: string;
}
interface PersonDetails {
    Prefix?: string;
    phones: number[];
    addresses: string[];
    email?: string;
    firstname: string;
    lastname: string;
    middlename?: string;
}
declare const arrPersonDetails: PersonDetails[];
declare function PhoneBook(obj: PersonDetails): void;
declare const objPersonDetails: PersonDetails;
