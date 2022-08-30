let name:string="masai"
let age:number=3
const isFetching:boolean=false

const array:number[]=[2,4,6]
const array2:Array<number>=[343,4342,45499,23243]

const arrrayOfStrings:string[]=["masai","school"]
const arrayTwoOfStrings:Array<string>=["three","years"]

const arrayOfTuples:[string,boolean]=["masai",true]

enum userAndAdmins{
    User=1,
    SuperUser,
    Admin,
    SuperAdmin
}
let user:userAndAdmins=userAndAdmins.User

const sum=(x:number,y:number):number=>{

    
    return(x+y)

}

function divide(x:number,y:number):void{
    x/y
}

interface arguments{
    name:string,
    year:number
}

const output=({name,year}:arguments):any=>{
    return name+year
}

const printName=(title:string)=>{
    
    console.log(title);
    
}


