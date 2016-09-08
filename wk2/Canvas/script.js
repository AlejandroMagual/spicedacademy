var context = document.getElementById('canv').getContext('2d');

context.strokeStyle = '#900';
context.beginPath();
context.arc(300,220,80,0,2*Math.PI);
context.moveTo(300,300);
context.lineTo(300,500);
context.moveTo(300,400);
context.lineTo(500,300);
context.moveTo(300,400);
context.lineTo(100,300);
context.moveTo(300,500);
context.lineTo(450,650);
context.moveTo(300,500);
context.lineTo(150,650);
context.stroke();
