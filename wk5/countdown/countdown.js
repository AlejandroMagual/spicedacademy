var EventEmitter = require('events').EventEmitter;

function Countdown(n)   {
    if (isNaN(n))   {
        return;
    }
    if (n < 0)   {
        return;
    }
    var c = this;
    setTimeout(function fn()   {
        c.emit('secondElapsed',n);
        n--;
        if (n >= 0) {
            setTimeout(fn,1000);
        }
    }, 1000);

}

Countdown.prototype = new EventEmitter;

module.exports.Countdown = Countdown;
