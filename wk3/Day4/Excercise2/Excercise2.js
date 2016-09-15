function validateText() {
    var text = document.getElementById('textArea').value;
    var validationMessage = document.getElementById('response');
    try {
        JSON.parse(text);
        validationMessage.innerHTML = 'Text is valid JSON';
    }   catch (e) {
        validationMessage.innerHTML = 'Text is NOT valid JSON';
    }
}
