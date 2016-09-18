// Create "element" Node List with the four kitty images
var element = document.getElementsByClassName('kittyImages');

// Initialize two indexes "i" and "j" to loop through "element" node list
// in the form of i%4 to generate 0,1,2,3,0,1,2,3,... recursive sequence
var i = 0;
var j = 1;

// Initial "element[]" position: [0] on-screen ; [1]-[3] off-screen (right)
element[1].style.transform = 'translateX(100%)';
element[2].style.transform = 'translateX(100%)';
element[3].style.transform = 'translateX(100%)';

// Create "dot" Node List with the four <p> elements, each representing a dot
var dot = document.getElementsByClassName('dot');

// Initial "dot[]" content: [0] black-circle (&#9679;); [1]-[3] white-circle (&#9675;)
dot[0].innerHTML = "&#9679;";

// "carousel" function executes animation effect (recursive; setTimeout callback every 5s)
setTimeout(carousel,5000);

// Add 'click' event to reset index "j" that will set the image being brought to screen in
// each transition iteration:
var moveImg1onScreen = function() { j=0; };
var moveImg2onScreen = function() { j=1; };
var moveImg3onScreen = function() { j=2; };
var moveImg4onScreen = function() { j=3; };
dot[0].addEventListener('click',moveImg1onScreen);
dot[1].addEventListener('click',moveImg2onScreen);
dot[2].addEventListener('click',moveImg3onScreen);
dot[3].addEventListener('click',moveImg4onScreen);

function carousel() {
    // Sliding animation effect and dot status update
    element[i%4].style.transform = 'translateX(-100%)';
    element[j%4].style.transform = 'translateX(0%)';
    dot[i%4].innerHTML = "&#9675;";
    dot[j%4].innerHTML = "&#9679;";

    // Add / Remove EventListener 'transitionend' to element[i%4] to return it
    // to its initial off-screen (right) position with transitionDuration 0 seconds,
    // once the sliding animation is completed.
    // For Carousel animation to work correctly in succesive iterations, need to reset
    // transitionDuration to 1 second (its original specification in class "kittyImages")
    // for both all the four image elements:
    var moveImgToRightSide = function() {
        this.style.transitionDuration = '0s';
        this.style.transform = "translateX(100%)";
        this.removeEventListener('transitionend',moveImgToRightSide);
    };
    element[i%4].addEventListener('transitionend',moveImgToRightSide);

    element[i%4].style.transitionDuration = '1s';
    element[(i+1)%4].style.transitionDuration = '1s';
    element[(i+2)%4].style.transitionDuration = '1s';
    element[(i+3)%4].style.transitionDuration = '1s';

    // Always reset index "i" to follow behind index "j" in next iteration:
    i = j-1;

    // Loop to repeat sliding effect in perpetuity while browser is open
    i++;
    j++;
    setTimeout(carousel,5000);
}
