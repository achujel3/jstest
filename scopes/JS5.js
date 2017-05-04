var i = 0;

setInterval(function() {
    if (i !== 10) {
        console.log(i);
        i++;
    } else {
        clearInterval(this);
    }
}, 250);