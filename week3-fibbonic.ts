function fibonacci(n: number): number {
  if (n < 0) {
    throw new Error("Fibonacci is not defined for negative numbers.");
  }

  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0, b = 1, result = 1;

  for (let i = 2; i <= n; i++) {
    result = a + b;
    a = b;
    b = result;
  }

  return result;
}

try {
console.log("Fibonacci of 0:", fibonacci(0)); 
console.log("Fibonacci of 1:", fibonacci(1)); 
console.log("Fibonacci of 2:", fibonacci(2)); 
console.log("Fibonacci of 3:", fibonacci(3)); 
console.log("Fibonacci of 5:", fibonacci(5)); 
console.log("Fibonacci of 10:", fibonacci(-3)); 
}
catch (error) {
  console.error("Error:", (error as Error).message);
}