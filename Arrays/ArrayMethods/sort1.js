const points = [40, 100, 1, 5, 25, 10];

const result = points.sort(function (a, b) {
  return a - b;
});

console.log(result);
// Output
// [ 1, 5, 10, 25, 40, 100 ]
