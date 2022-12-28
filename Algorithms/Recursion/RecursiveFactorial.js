// Factorial using Recursive function

function recursiveFactorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(1));
console.log(recursiveFactorial(2));
console.log(recursiveFactorial(4));

// Take a pen and paper and trace function execution for
// n === 5
