// TYPESCRIPT INTRO: 1
let myName = "Shawn";
let myAge = 26;
let fetchStatus = true;
const arr = [1, 2, 3, 4, 5];
const arrStr = ["Shawn", "Frost"];
const firstTuple = ["Footballer", true];
var Users;
(function (Users) {
    Users[Users["User"] = 0] = "User";
    Users[Users["SuperUser"] = 1] = "SuperUser";
    Users[Users["Admin"] = 2] = "Admin";
    Users[Users["SuperAdmin"] = 3] = "SuperAdmin";
})(Users || (Users = {}));
;
console.log(Users["User"]);
const firstTypeScriptFunction = (x, y) => {
    return x * y;
};
function printName(name) {
    console.log(name);
}
const obj = {
    status: true,
    title: "First object from interface",
    id: 1
};
const getName = ({ firstname, lastname }) => {
    return `${firstname} ${lastname}`;
};
getName({ firstname: "Shawn" });
const arrPersonDetails = [];
function PhoneBook(obj) {
    arrPersonDetails.push(obj);
}
const objPersonDetails = {
    phones: [12, 23, 34, 45, 56],
    addresses: ["Chennai", "Bangalore"],
    firstname: "Nagi",
    lastname: "Barou",
};
PhoneBook(objPersonDetails);
function getType(obj) {
    return obj.type;
}
const user1 = {
    type: "user",
    name: "user1",
    age: 28,
    occupation: "Programmer"
};
const user2 = {
    type: "admin",
    name: "user2",
    age: 29,
    occupation: "Programmer"
};
console.log(getType(user2));
//# sourceMappingURL=index.js.map