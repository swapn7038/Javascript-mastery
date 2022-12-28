// Binary search

// Problem : Given a sorted array of 'n' elements and
// a target element 't', find the index of 't' in the
// array. Return -1 if the target element is not found.

function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) {
      return middleIndex;
    }
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
}

console.log(binarySearch([-5, 2, 10, 4, 6], 10));
console.log(binarySearch([-5, 2, 10, 4, 6], 6));
console.log(binarySearch([-5, 2, 10, 4, 6], 20));

// Take a pen and paper, and write function execution for
// first array
