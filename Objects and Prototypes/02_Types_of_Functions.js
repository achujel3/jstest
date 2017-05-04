function foo(message) {
    console.log(message);
}

foo("This is a first method"); // Method #1

var obj = {};

obj.foo = function(message) {
    console.log(message);
};

obj.foo("This is a second method"); // Method #2

new foo("This is a third method"); // Method #3

function Bicycle(cadence, speed, gear, tirePressure) {
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
    this.tirePressure = tirePressure;
    this.inflateTires = function() {
        this.tirePressure += 3;
    };
};

var bicycle1 = new Bicycle(50, 20, 4, 25);
bicycle1.inflateTires();

var bicycle2 = new Bicycle(50, 20, 4, 30);
bicycle2.inflateTires();

function Mechanic(name) {
    this.name = name;
}

var mike = new Mechanic("Mike");
mike.inflateTires = bicycle1.inflateTires;
mike.inflateTires.call(bicycle1); // Method #4

console.log(mike);
console.log(bicycle1);