const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log((fruits[fruits.length] = "Kiwi"));
console.log(fruits);

// Output
// Kiwi
// [ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]
