// prime numbers
// Problem : Givern a number determine the number is
// prime or not

// sol 1

// function isPrime(n) {
//   if (n < 2) {
//     return false;
//   }

//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(isPrime(1));
// console.log(isPrime(5));
// console.log(isPrime(4));

// sol 2
// optimized primality test
// integers larger than the square root do not
// need to check because, whenever 'n=a*b',
// one of the two factors 'a' and 'b' is less than
// or equal to the square root of 'n'

function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(4));
