
function invertCase(arg) {

    var char = [].slice.call(arg);  // create array with characters

    for (var i = 0; i < char.length; i++) {
        if (char[i] === char[i].toUpperCase()) {
            char[i] = char[i].toLowerCase();
        }
        else if (char[i] === char[i].toLowerCase()) {
            char[i] = char[i].toUpperCase();
        };
    };

    return char.join('');
}
