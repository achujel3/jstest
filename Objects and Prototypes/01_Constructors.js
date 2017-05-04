var emp1 = {};
emp1.firstName = "Bob";
emp1.lastName = "Dylan";
emp1.gender = "M";
emp1.designation = "Artist";

var emp2 = {};
emp2.firstName = "David";
emp2.lastName = "Bowie";
emp2.gender = "M";
emp2.designation = "Artist";

function createEmployee(firstName, lastName, gender, designation) {
    var returnNewEmployee = {};
    returnNewEmployee.firstName = firstName;
    returnNewEmployee.lastName = lastName;
    returnNewEmployee.gender = gender;
    returnNewEmployee.designation = designation;
    return returnNewEmployee;
}

var emp3 = createEmployee("Tom", "Lenich", "M", "Develoepr");

console.log(emp1);
console.log(emp2);
console.log(emp3);