var a = 10;

console.log("Executing...");

var fn = function() {
    console.log(a);
    console.log("Done");
};

setTimeout(fn, 3000);

function createPerson() {
    var fistName;
    var lastName;
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