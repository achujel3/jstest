var myObject = {
    a: 100,
    b: "Hello",
    "outerObject": {
        c: {
            d: "innerObject"
        },
    },
    age: 25
};

var array = ['a', 'b', 'c'];

array[3] = 'd';
array[10] = "wtf";
array['magic'] = 'magic';
array["foo"] = "foooooo";
console.log(myObject["outerObject"].c.d);
delete myObject.age;
console.log(myObject);
console.log(array);
console.log(array.length);