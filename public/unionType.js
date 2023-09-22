"use strict";
function concat(arg1, arg2) {
    let result;
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        result = arg1 + arg2;
    }
    else if (typeof arg1 === "string" && typeof arg2 === "string") {
        result = arg1 + arg2;
    }
    else {
        result = arg1.toString() + arg2.toString();
    }
    return result;
}
console.log(concat(20, 40));
console.log(concat("Hello ", "world"));
console.log(concat("toto ", 20));
