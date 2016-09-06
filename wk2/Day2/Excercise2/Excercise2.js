var textGettysburg = document.getElementById('Gettysburg').innerHTML;

var index = 0;

var textUser = document.getElementById('userInput');

textUser.addEventListener('input', function() {
    index++;
    this.value = textGettysburg.slice(0,index);
});
