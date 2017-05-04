for (var i = 0; i < 10; i++) {
    (function(currentValueOfI) {
        setTimeout(function() {
            console.log(currentValueOfI);
        }, 1000);
    })(i);

}