/*
EXCERCISE 1:
Write a function that expects a string representing a selector to be passed as a parameter.
The function should find all the elements in the document that match the selector and
change their style so that the text they contain is italic, underlined, and bold.
*/

function changeTextStyle(arg) {
    /* arg: string representing a selector */
    var elementList = document.querySelectorAll(arg);
    for (var i=0; i < elementList.length; i++) {
        elementList[i].style.fontStyle = "italic";
        elementList[i].style.textDecoration = "underline";
        elementList[i].style.fontWeight = "bold";
    };
}

/*
EXCERCISE 2:
Write a function that expects a string representing a class name to be passed as a parameter.
The function should return an array containing all the elements in the document that have
the class that was passed in.
*/

function elementsOfClass(arg) {
    /* arg: string representing a class name */
    var elementList = document.getElementsByClassName(arg);
    var elementArray = [].slice.call(elementList);
    return elementArray;
}

/*
EXCERCISE 3:
Write a function that inserts an element into the body of the currently loaded page.
That element should have fixed position, z-index of 2147483647, left of 20px,
top of 100px, font-size of 200px, and contain the text 'AWESOME'.
document.body.onload = addElement('div');
*/

function addElement(tagName) {
    /* tagName: string indicating type of element to be added */
    var element = document.createElement(tagName);
    var elementText = document.createTextNode("AWESOME");
    element.appendChild(elementText);
    element.style.fontSize = '200px';
    element.style.position = 'fixed';
    element.style.zIndex = '2147483647';
    element.style.left = '20px';
    element.style.top = '100px';
    document.body.appendChild(element);
}
