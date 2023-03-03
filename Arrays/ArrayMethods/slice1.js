const fruits = ["Banana", "Orange", "Apple", "Mango"];
const removed = fruits.splice(2, 2, "Lemon", "Kiwi");

console.log(removed);
console.log(fruits);

// Output
// [ 'Apple', 'Mango' ]
// [ 'Banana', 'Orange', 'Lemon', 'Kiwi' ]
