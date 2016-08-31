function waitThenRun(functionName) {
    setTimeout(functionName,1500);
}

 function printHello() {
    console.log('Hello!');
}

waitThenRun(printHello);
