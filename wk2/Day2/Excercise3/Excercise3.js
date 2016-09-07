var box = document.getElementById('square');

box.addEventListener('mousedown', function() {
    this.style.backgroundColor = randomRGB();
});

box.addEventListener('mouseup', function() {
    this.style.backgroundColor = randomRGB();
});

function randomRGB() {
    /* function returns string in the form of rgb(r,g,b) to be assigned to backgroundColor property */
    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);
    return 'rgb(' + r + ',' + g + ',' + b + ')'
}
