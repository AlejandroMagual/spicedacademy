
// Create "element" Node List with four kitty images
var element = document.getElementsByClassName('kittyImages');

var i = 0;  // initialize index to loop through "element" node list

// Initial element[] position: [0] on-screen ; [1]-[3] off-screen (right)
element[1].style.transform = 'translateX(100%)';
element[2].style.transform = 'translateX(100%)';
element[3].style.transform = 'translateX(100%)';

// "carousel" function executes animation effect (recursive; setTimeout callback every 5s)
setTimeout(carousel,3000);

function carousel() {
    // Before sliding animation starts, add event 'transitionend' to element[i%4]
    // to move it off-screen (right) once sliding effect is completed
    element[i%4].addEventListener('transitionend',test);
    function test() {
        this.style.transitionDuration = '0s';
        this.style.transform = "translateX(100%)";
    }
    // sliding animation effect and loop
    element[i%4].style.transform = 'translateX(-100%)';
    element[(i+1)%4].style.transform = 'translateX(0%)';
    i++;
    setTimeout(carousel,3000);
}
