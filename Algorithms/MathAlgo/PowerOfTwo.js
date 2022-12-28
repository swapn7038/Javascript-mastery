// Power of two
// Problem : Given a positive integer 'n', determine
// if the number is a power of 2 or not
// An integer is a power of two if there exists
// an integer 'x' such that 'n' == 2;

// isPowerOfTwo(1) = true (2 to the  power (0) )
// isPowerOfTwo(2) = true (2 to the  power (0) )
// isPowerOfTwo(5) = false (2 to the  power (0) )

function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));
