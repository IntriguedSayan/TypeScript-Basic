declare let name: string;
declare let age: number;
declare const isFetching: boolean;
declare const array: number[];
declare const array2: Array<number>;
declare const arrrayOfStrings: string[];
declare const arrayTwoOfStrings: Array<string>;
declare const arrayOfTuples: [string, boolean];
declare enum userAndAdmins {
    User = 1,
    SuperUser = 2,
    Admin = 3,
    SuperAdmin = 4
}
declare let user: userAndAdmins;
declare const sum: (x: number, y: number) => number;
declare function divide(x: number, y: number): void;
interface arguments {
    name: string;
    year: number;
}
declare const output: ({ name, year }: arguments) => any;
declare const printName: (title: string) => void;
