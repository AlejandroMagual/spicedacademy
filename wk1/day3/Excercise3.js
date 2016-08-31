function test(n) {

    if (typeof n === "number") {
        if (isNaN(n)) {         //Test if "n" is NaN
            return 'ERROR';
        }
        else if (n <= 0) {      //Test if n <= 0
            return 'ERROR';
        }
        else if (n >= 1000000) {    //Test if n >= 1000000
            return n;
        }
        else {                      //Multiply n by 10 till n>= 1000000
            var product = n;
            while (product < 1000000) {
                product *= 10;
            };
            return product;
        }
    }
    else {
        return 'ERROR';
    }
}
