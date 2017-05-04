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

function Employee(firstName, lastName, gender, designation) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.designation = designation;

}

var emp3 = new Employee("Tom", "Lenich", "M", "Develoepr");

console.log(emp1);
console.log(emp2);
console.log(emp3);