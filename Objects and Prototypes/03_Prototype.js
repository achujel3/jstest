// creating a constructor:
function Employee(name) {
    this.name = name;
}

// calling constructor:
var emp1 = new Employee("Tom");
var emp2 = new Employee("Dom");

// adding prototype methods:
Employee.prototype.playPranks = function() {
    console.log(this.name + ". Prank played");
};

// runnig prototype methods:
emp1.playPranks();
emp2.playPranks();