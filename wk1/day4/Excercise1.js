
function each(arg, argFunction) {     // arg1: object or array ; arg2: callback

    for (var prop in arg) {
        argFunction(arg[prop],prop);
    };
    
}
