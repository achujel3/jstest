// making objects private/public:

function createPerson() {
    var firstName = "Bob";
    var lastName = "Dylan";
    var returnObejct = {
        "getFirstName": function() {
            return firstName;
        },
        "getLastName": function() {
            return lastName;
        },
        "setFirstName": function(name) {
            firstName = name;
        },
        "setLastName": function(name) {
            LastName = name;
        }
    }
    return returnObejct;
}

var person = createPerson();

console.log(person.firstName);
console.log(person.lastName);
console.log(person.getFirstName());
console.log(person.getLastName());