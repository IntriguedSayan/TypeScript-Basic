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
