type name=string;
let myName:name = "Shawn";



type age=number;
let myAge:age = 26;

type isFetching=boolean;
let fetchStatus:isFetching=true;


const arr:number[] = [1,2,3,4,5];

const arrStr:Array<string> = ["Shawn","Frost"];

const firstTuple:[string,boolean]=["Footballer",true];

enum Users{
    User, SuperUser, Admin, SuperAdmin
};

console.log(Users["User"]);

const firstTypeScriptFunction=(x:number,y:number):number=>{

    return x*y;

}

function printName(name:string):void{

    console.log(name);
    

}