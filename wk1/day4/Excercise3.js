
function testNegative(arg)  {
    if (arg < 0) {
        return arg;
    };
}

function getLessThanZero(arr) {
    return arr.filter(testNegative)
}
