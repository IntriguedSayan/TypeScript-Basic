const getName = ({ firstname, lastname }) => {
    if (lastname)
        return firstname + lastname;
    else
        return firstname;
};
const arr = [];
function PhoneBook({ prefix, phones, address, email, firstName, lastName, middleName }) {
    prefix = "Mr.";
    phones = [9123747665];
    address = ["48/1,Natungram Road,Gandhinagar,Shyamnagar,North-24-Pargana"];
    email = "sayan.mid590@gmail.com";
    firstName = "Sayan";
    lastName = "Mukherjee";
    let personalDetails = {
        prefix: prefix,
        phones: phones,
        address: address,
        email: email,
        firstName: firstName,
        lastName: lastName
    };
    let line = 0;
    arr[line++] = personalDetails;
}
PhoneBook()
console.log(arr);
//# sourceMappingURL=index1.js.map