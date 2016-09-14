
var frameId;

var links = document.getElementsByClassName('headline');
var box = document.getElementById('container');

var distance = 0;

function newAnimation() {
  box.style.left = distance + 'px';

  var width = links[0].offsetWidth;

  if (box.offsetLeft < -width) {
    box.appendChild(links[0]);
    distance += width;
    box.style.left = distance + 'px';
  };

  distance -= 2;

  frameId = requestAnimationFrame(newAnimation);

}

frameId = requestAnimationFrame(newAnimation);

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('mouseenter', function(){
    cancelAnimationFrame(frameId);
  });
  links[i].addEventListener('mouseleave', function(){
    frameId = requestAnimationFrame(newAnimation);
  });
}
