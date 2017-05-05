// creating Employee constructor:
function Employee(name) {
    this.name = name;
}

// creating Employee:
var emp1 = new Employee("Tom");

// creating name getter for Employee:
Employee.prototype.getName = function() {
    return this.name;
}

// priting Employee's name:
console.log(emp1.getName());

// creating Manager's constructor:
function Manager(name, dept) {
    this.name = name;
    this.dept = dept;
}

// creating Manager:
var mng1 = new Manager("Dom", "Admin");

// creating Manager deparment's getter:
Manager.prototype.getDept = function() {
    return this.dept;
}

// priting manager's department name
console.log(mng1.getDept());

// creating inheritance 
mng1.__proto__.__proto__ = Employee.prototype;

// priting manager's name:
console.log(mng1.getName());

// creating another manager:
var mng2 = new Manager("Frank", "Jnaitor");

// priting another manager's name:
console.log(mng2.getName());