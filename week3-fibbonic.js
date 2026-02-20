function fibonacci(n) {
    if (n < 0) {
        throw new Error("Fibonacci is not defined for negative numbers.");
    }
    if (n === 0)
        return 0;
    if (n === 1)
        return 1;
    var a = 0, b = 1, result = 1;
    for (var i = 2; i <= n; i++) {
        result = a + b;
        a = b;
        b = result;
    }
    return result;
}
try {
    console.log("Fibonacci of 0:", fibonacci(0)); // 0
    console.log("Fibonacci of 1:", fibonacci(1)); // 1
    console.log("Fibonacci of 2:", fibonacci(2)); // 1
    console.log("Fibonacci of 3:", fibonacci(3)); // 2
    console.log("Fibonacci of 5:", fibonacci(5)); // 5
    console.log("Fibonacci of 10:", fibonacci(-3)); // 55
}
catch (error) {
    console.error("Error:", error.message);
}
