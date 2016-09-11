// Create "element" Node List with four kitty images
var element = document.getElementsByClassName('kittyImages');

// Initialize index to loop through "element" node list
// in the form of i%4 to generate 0,1,2,3,0,1,2,3,... recursive sequence
var i = 0;

// Initial "element[]" position: [0] on-screen ; [1]-[3] off-screen (right)
element[1].style.transform = 'translateX(100%)';
element[2].style.transform = 'translateX(100%)';
element[3].style.transform = 'translateX(100%)';

// "carousel" function executes animation effect (recursive; setTimeout callback every 5s)
setTimeout(carousel,5000);

function carousel() {
    // Sliding animation effect
    element[i%4].style.transform = 'translateX(-100%)';
    element[(i+1)%4].style.transform = 'translateX(0%)';

    // Add / Remove EventListener 'transitionend' to element[i%4] to return it
    // to its initial off-screen (right) position with transitionDuration 0 seconds,
    // once the sliding animation is completed.
    // For Carousel animation to work correctly in succesive iterations, need to reset
    // transitionDuration to 1 second (its original specification in class "kittyImages")
    // for both sliding elements [i%4] and [(i+1)%4]
    var test = function() {
        this.style.transitionDuration = '0s';
        this.style.transform = "translateX(100%)";
        this.removeEventListener('transitionend',test);
    };
    element[i%4].addEventListener('transitionend',test);

    element[i%4].style.transitionDuration = '1s';
    element[(i+1)%4].style.transitionDuration = '1s';

    // Loop to repeat sliding effect in perpetuity while browser is open
    i++;
    setTimeout(carousel,5000);
}
