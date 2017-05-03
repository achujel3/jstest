var a = 10;

console.log("Executing...");

var fn = function() {
    console.log(a);
    console.log("Done");
};

setTimeout(fn, 3000);

