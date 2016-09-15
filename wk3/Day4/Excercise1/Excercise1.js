function askForNumber() {
    var input = prompt("Enter a number between 1 and 10:");
    var number = Number(input);
    if ((Number.isInteger(number)) && ((number <= 10) && (number >= 1))) {
        return number;
    }
    else {
        var userNumberError = new Error("not a valid number");
        throw userNumberError;
    }
}

function translateNumberToGerman() {
    try {
        var numberInput = askForNumber();
        var numberInGerman = ['eins','zwei','drei','vier','fünf','sechs','sieben','acht','neun','zehn'];
        return numberInGerman[numberInput-1];
    } catch(e) {
        console.log(e);
        return translateNumberToGerman();
    }
}

var result = translateNumberToGerman();
console.log(result);
