function factorial(n: number): number {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers.");
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
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
} catch (error) {
  console.error("Error:", (error as Error).message);
}

