const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);
function myFunction(value) {
  txt += value + ",";
  console.log(txt);
}

// Calls a function once for each array element.
//45,
// 45,4,
// 45,4,9,
// 45,4,9,16,
// 45,4,9,16,25,
