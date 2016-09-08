var context = document.getElementById('canv').getContext('2d');

context.strokeStyle = '#000';
context.lineWidth = 5;
context.beginPath();
context.arc(300,230,70,0,2*Math.PI);
context.moveTo(300,300);
context.lineTo(300,500);
context.moveTo(300,370);
context.lineTo(450,290);
context.moveTo(300,370);
context.lineTo(150,290);
context.moveTo(300,500);
context.lineTo(420,620);
context.moveTo(300,500);
context.lineTo(180,620);
context.stroke();
