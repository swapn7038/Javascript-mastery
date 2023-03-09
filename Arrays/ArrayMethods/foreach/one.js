const arrayLike = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
};
Array.prototype.forEach.call(arrayLike, (x) => console.log(x));
