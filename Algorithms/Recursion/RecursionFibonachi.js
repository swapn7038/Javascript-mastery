// Fibonachi sequence using recursion

function recursiveFibonachi(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibonachi(n - 1) + recursiveFibonachi(n - 2);
}

console.log(recursiveFibonachi(1));
console.log(recursiveFibonachi(5));
console.log(recursiveFibonachi(6));

// Exercise : Take pen and paper and trace function execution
// for number 7
