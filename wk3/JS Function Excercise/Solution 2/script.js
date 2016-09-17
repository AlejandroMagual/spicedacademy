/*
PROBLEM STATEMENT:
Based on the below, deduce what "multipliers" does and then produce a satisfactory code solution.

var multipliers = getMultipliers(3);
multipliers[0](1);  //0
multipliers[1](1);  //1
multipliers[2](1);  //2
multipliers[3](1);  //error

ANSWER:
"multipliers" is an array containing functions that return the product of the corresponding
array index by the argument passed within parenthesis. "getMultipliers" is a function that
returns the array "multipliers", and the argument of the function sets the length of the
"multipliers" array.
 */

// The following is my alternative solution using immediately invoked function:

function getMultipliers(n) {
    var multipliers = [];
    for (var i=0; i<n; i++) {
        (function(i) {
            multipliers[i] = function(n) {
                return i*n;
            }
        })(i);
    }
    return multipliers;
}
