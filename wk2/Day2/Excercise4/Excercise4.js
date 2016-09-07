var boxSmall = document.getElementById('squareSmall');
var boxBig = document.getElementById('squareBig');

boxSmall.addEventListener('click', function(e) {
    this.style.backgroundColor = randomRGB();
    e.stopPropagation();
});

boxBig.addEventListener('click', function() {
    this.style.backgroundColor = randomRGB();
});

function randomRGB() {
    /* function returns string in the form of rgb(r,g,b) to be assigned to backgroundColor property */
    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);
    return 'rgb(' + r + ',' + g + ',' + b + ')'
}
