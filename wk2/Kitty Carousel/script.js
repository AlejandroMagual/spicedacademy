
var element = document.getElementsByClassName('kittyImages');
var i = 3;

element[(i-2) % 4].style.transform = 'translateX(-100%)';
element[(i-1) % 4].style.transform = 'translateX(-100%)';
element[(i+1) % 4].style.transform = 'translateX(100%)';
setTimeout(carousel,5000);


function carousel() {
    element[(i-1) % 4].style.transform = 'translateX(0%)';
    element[(i % 4)].style.transform = 'translateX(100%)';
    element[(i+1) % 4].style.transform = 'translateX(-100%)';
    i++;
    setTimeout(carousel,5000);
}


/* TEST:
var element = document.getElementsByClassName('kittyImages');
var i = 3;
setTimeout(test,2000);

function carousel() {
    element[i].style.transform = 'translateX(100%)';
    if (i >= 0) {i--;};
    setTimeout(carousel,5000);
}

function test() {
    element[i].style.display = 'none';
    if (i >= 0) {i--;};
    setTimeout(test,2000);
}
*/
