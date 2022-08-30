let name = "masai";
let age = 3;
const isFetching = false;
const array = [2, 4, 6];
const array2 = [343, 4342, 45499, 23243];
const arrrayOfStrings = ["masai", "school"];
const arrayTwoOfStrings = ["three", "years"];
const arrayOfTuples = ["masai", true];
var userAndAdmins;
(function (userAndAdmins) {
    userAndAdmins[userAndAdmins["User"] = 1] = "User";
    userAndAdmins[userAndAdmins["SuperUser"] = 2] = "SuperUser";
    userAndAdmins[userAndAdmins["Admin"] = 3] = "Admin";
    userAndAdmins[userAndAdmins["SuperAdmin"] = 4] = "SuperAdmin";
})(userAndAdmins || (userAndAdmins = {}));
let user = userAndAdmins.User;
const sum = (x, y) => {
    return (x + y);
};
function divide(x, y) {
    x / y;
}
const output = ({ name, year }) => {
    return name + year;
};
const printName = (title) => {
    console.log(title);
};
//# sourceMappingURL=index.js.map