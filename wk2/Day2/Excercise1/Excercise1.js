var box = document.getElementById('square');

document.addEventListener('mousemove', function(e) {
    var offsetX = -50;  /* offset coordinates to position mouse at square's centre*/
    var offsetY = -50;
    box.style.top = (e.pageY+offsetX)+'px';
    box.style.left = (e.pageX+offsetY)+'px';
});
