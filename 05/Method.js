function test(name, surname) {
    console.log("Hello, " + name + " " + surname + "!");
};

function returnTest(name, surname) {
    return "Your name is: " + name + " " + surname + ".";
};

var f = function sayHello() {
    console.log('Hello!');
};

var d = function() {
    console.log('Hello!');
};

var execute = function(func1, argument1, argument2) {
    func1(argument1, argument2);
};

test("Bob", "Dylan");
var returnedValue = returnTest("Tom", "Donitto");
console.log(returnedValue);

execute(test, "Bob", "Dylan");

d();

var myObject = {
    a: "Hello",
    b: function(name, surname) {
        return returnTest(name, surname);
    },
    c: function(func, argument1, argument2) {
        func(argument1, argument2);
    }
};

console.log(myObject.b("Bob", "Dylan from myObject function as prop"));
console.log(myObject.c(test, "Bob", "Dylan from myObject function as prop with argument as function name"));

var person2 = {
    name: "Bob",
    surname: "Dylan",
    getFullName: function() {
        return "Full name is: " + this.name + " " + this.surname;
    }
}

console.log(person2.getFullName());

var person3 = {
    "name": "Brad",
    "surname": "Pitt",
    getFullName: function() {
        return "Full name is: " + this.name + " " + this.surname;
    },
    "address": {
        "city": "LA",
        "street": "St. Marry blvd.",
        "houseNr": "35214",
        getFullAddress: function() {
            return "Full address: " + this.street + " " + this.houseNr + ", " + this.city;
        }
    },
    "isFrom": function(cityName) {
        return this.address.city === cityName;
    }
};

console.log(person3.isFrom("NY"));


function add() {
    var i, sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    };
    return sum;
};

console.log(add(10, 15, 35, 22));

var myArray = ['a', 3, 'b', "hello"];
myArray.pop();
myArray.shift();
myArray.unshift("hello");
console.log(myArray);

myArray.forEach(function(item, index) {
    console.log("For each array item [" + index + "]: " + item);
})