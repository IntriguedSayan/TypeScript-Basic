interface info{
    title:string,
    status:true,
    id:number
}
interface name{
    firstname:string,
    lastname?:string
}
const getName=({firstname,lastname}:name):string=>{

    if(lastname) return firstname+lastname
    else return firstname

}

interface Address{
    houseNumber:number,
    street:string,
    city:string,
    state:string,
    postalCode:number
    country:string
}

interface personalDetails{
    prefix?:string,
    phones:Array<number> | number[],
    address:Array<object> | string[],
    email?:string,
    firstName:string,
    lastName:string,
    middleName?:string
}

const arr:personalDetails=[]

function PhoneBook({prefix,phones,address,email,firstName,lastName,middleName}:personalDetails):any{

    
    prefix="Mr."
    phones=[9123747665]
    address=["48/1,Natungram Road,Gandhinagar,Shyamnagar,North-24-Pargana"]
    email="sayan.mid590@gmail.com"
    firstName="Sayan"
    lastName="Mukherjee"
    let personalDetails={
        prefix:prefix,
        phones:phones,
        address:address,
        email:email,
        firstName:firstName,
        lastName:lastName
    }

    let line=0
    arr[line++]=personalDetails
    

}
console.log(arr);

