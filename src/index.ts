                                // TYPESCRIPT INTRO: 1

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

                                    // TYPESCRIPT INTRO: 2

  interface stats{

    id:number;
    status:boolean;
    title:string;

  }                                  

  const obj:stats={

    status:true,
    title:"First object from interface",
    id:1

  }

  type nameDetails = {

    firstname:string;
    lastname?:string;

  }
  

  const getName=({firstname,lastname}:nameDetails):string =>{

        return `${firstname} ${lastname}`;


  } 

  getName({firstname:"Shawn"});

  interface Address{ 

    houseNumber:number;
    street:string;
    city:string;
    state:string;
    postalCode:number;
    country:string;

  }

  interface PersonDetails {

    Prefix?:string;
    phones:number[];
    addresses:string[];
    email?:string;
    firstname:string;
    lastname:string;
    middlename?:string;

  }


  const arrPersonDetails:PersonDetails[]=[];

  function PhoneBook(obj:PersonDetails):void{

       arrPersonDetails.push(obj);

  }

  const objPersonDetails:PersonDetails={

    phones:[12,23,34,45,56],
    addresses:["Chennai","Bangalore"],
    firstname:"Nagi",
    lastname:"Barou",


  }

  PhoneBook(objPersonDetails);

                                    //   TYPESCRIPT INTRO: 3
                            
 interface User{

    type: "user";
    name:string;
    age:number;
    occupation:string;

 }                  
 
 interface Admin{

    type: "admin";
    name:string;
    age:number;
    occupation:string;

 }
function getType(obj:User|Admin):string {


    return obj.type;


}

const user1:User={

    type: "user",
    name: "user1",
    age: 28,
    occupation:"Programmer"
}

console.log(getType(user1));

