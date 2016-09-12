// PENDING CODE:
// Make START button invisible after game starts.
// Rename START button to START NEW GAME when game ends.

// Variables:
var index;   // integer that indicates hangman section to draw (see function "hangman").
             // index is initialized to "0" when "START" button is clicked on (see function "start").

var wordArray = ['word1','word2','word3','word4','word5',];   // Collection of words for game


var context = document.getElementById('canv').getContext('2d');   // Canvas to draw hangman stick figure

// Hangman stick figure's frame, rope and floor are always visible:
context.strokeStyle = '#000';
context.lineWidth = 5;
context.beginPath();
    // Rope and Frame
    context.moveTo(250,70);
    context.lineTo(250,10);
    context.lineTo(450,10);
    context.lineTo(450,450);
    context.moveTo(450,400);
    context.lineTo(400,450);
    // Floor
    context.moveTo(500,450);
    context.lineTo(50,450);
context.stroke();

// Hangman stick figure is made visible in 6-steps when function "hangman" is called.
function hangman(num) {
    // index: integer (1 to 6) that indicates hangman section to be drawn
    context.strokeStyle = '#000';
    context.lineWidth = 5;
    context.beginPath();
    if (num === 1) {                            // draw Head
        context.arc(250,120,50,0,2*Math.PI);
    }
    else if (num === 2) {                       // draw Trunk
        context.moveTo(250,170);
        context.lineTo(250,310);
    }
    else if (num === 3) {                       // draw Left Arm
        context.moveTo(250,220);
        context.lineTo(145,165);
    }
    else if (num === 4) {                       // draw Right Arm
        context.moveTo(250,220);
        context.lineTo(355,165);
    }
    else if (num === 5) {                       // draw Left Leg
        context.moveTo(250,310);
        context.lineTo(165,395);
    }
    else if (num === 6) {                       // draw Right Leg
        context.moveTo(250,310);
        context.lineTo(335,395);
    }
    context.stroke();
}

// Hangman stick figure is deleted when function "deleteHangman" is called by "START" button.
function deleteHangman() {
    void context.clearRect(140, 70, 220, 335);
}

// Start Button:
function start() {
    index = 0;          // initialize index
    deleteHangman();    // clear hangman
    // Make START button invisible after game starts (PENDING)
    // Rename START button to START NEW GAME when game ends (PENDING)
}
