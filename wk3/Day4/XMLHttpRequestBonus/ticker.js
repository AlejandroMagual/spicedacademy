
var frameId;

 var links = [];

var box = document.getElementById('container');

// XMLHttpRequest
var xhr = new XMLHttpRequest;
xhr.open('GET', '/links/headlines.json');
xhr.send();

// Handling response
xhr.addEventListener('readystatechange', function() {
    if (xhr.readyState != XMLHttpRequest.DONE) {
        return;
    }
    var status;
    try {
        status = xhr.status;
    } catch(e) {
        console.log('xhr.status = ' + status);
        return;
    }
    if (status != 200) {
        console.log('HTTP status code is not 200');
        return;
    }
    var responseText = xhr.responseText;
    var data;
    try {
        data = JSON.parse(responseText);
    } catch (e) {
        console.log('Error parsing JSON');
        return;
    }

    for (var i=0; i<data.length; i++) {
        links[i] = document.createElement('a');
        links[i].innerHTML = data[i].content;
        links[i].href = data[i].href;
        box.appendChild(links[i]);
    }
    return links
});

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
