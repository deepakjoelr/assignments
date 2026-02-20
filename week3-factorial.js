"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = factorial;
function factorial(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    var result = 1;
    for (var i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
try {
    console.log("Factorial of 0:", factorial(0));
    console.log("Factorial of 1:", factorial(1));
    console.log("Factorial of 2:", factorial(2));
    console.log("Factorial of 3:", factorial(3));
    console.log("Factorial of -3:", factorial(-3));
}
catch (error) {
    console.error("Error:", error.message);
}
