// Linear search
// Problem : Givven an array of 'n'elements and a target
// element 't'. find the index of 't' in the array. Return - 1
// if the target element is not found.

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    //
    if (arr[i] === target) {
      //
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([-5, 2, 10, 4, 6], 10));
console.log(linearSearch([-5, 2, 10, 4, 6], 6));
console.log(linearSearch([-5, 2, 10, 4, 6], 20));
