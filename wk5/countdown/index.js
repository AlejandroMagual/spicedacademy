
var countdown = require('./countdown');   //  ./ means countdown is on same path as this file

new countdown.Countdown(10).on('secondElapsed', function(n) {
    if (n) {
        console.log(n + '!');
    } else {
        console.log('Lift off!');
    }
});
