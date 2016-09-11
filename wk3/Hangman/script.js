



var context = document.getElementById('canv').getContext('2d');

context.strokeStyle = '#000';
context.lineWidth = 5;
context.beginPath();
// Head
context.arc(250,120,50,0,2*Math.PI);
// Trunk
context.moveTo(250,170);
context.lineTo(250,310);
// Right Arm
context.moveTo(250,220);
context.lineTo(355,165);
// Left Arm
context.moveTo(250,220);
context.lineTo(145,165);
// Right Leg
context.moveTo(250,310);
context.lineTo(335,395);
// Left Leg
context.moveTo(250,310);
context.lineTo(165,395);
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
