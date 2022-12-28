// Fibonachi sequence
// Problem : Give a number 'n'. find the first 'n'
// elements of the Fibonachi sequence
// In mathematics, the Fibonachi sequence in which
// each number is the sum of the two preceding ones.

function fibonacci(n) {
  // Initialize an array with the first two terms of the series
  var series = [0, 1];

  // Generate the remaining terms
  for (var i = 2; i < n; i++) {
    // The next term is the sum of the previous two terms
    var next = series[i - 1] + series[i - 2];
    series.push(next);
  }

  // Return the series
  return series;
}

fibonacci(10);
