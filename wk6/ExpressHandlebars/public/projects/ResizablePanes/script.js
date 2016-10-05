var imgBar = document.getElementById('bar');
var textContainer = document.getElementById('info-pane');


var imgLeft = document.getElementById('left-img-pane');
//var imgRight = document.getElementById('right-img-pane');
var imgContainer = document.getElementById('inner-img-pane');


var test = function(e) {
    imgLeft.style.width = (e.clientX-300) + 'px';
    imgBar.style.left = (e.clientX-300) + 'px';
};


imgBar.addEventListener('mousedown',function(f) {
    imgContainer.addEventListener('mousemove',test);
    f.preventDefault();
});

document.addEventListener('mouseup',function() {
    console.log('inside mouseup');
    imgContainer.removeEventListener('mousemove', test);
});
