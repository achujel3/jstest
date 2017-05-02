// testing anonymous function with instant execution (IIFE)
(function() {
    var a = 10;
    var b = 20;
    console.log(a + b);
})();

var a = 10;

function outer() {
    var b = a;
    console.log(b);

    function inner() {
        var c = b;
        // why undefinde? hoisting
        console.log(c);
        var b = 20;
    }
    inner();
}
outer();

// testing use strict
function myFn() {
    'use strict';
    var myName = "bob";
    // myname = "tom";
};
myFn();