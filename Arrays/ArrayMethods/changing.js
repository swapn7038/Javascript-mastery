const fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits[0] = "Lemon";
console.log(fruits);

fruits[1] = "Pomegranite";
console.log(fruits);

// Output
// [ 'Lemon', 'Orange', 'Apple', 'Mango' ]
// [ 'Lemon', 'Pomegranite', 'Apple', 'Mango' ]
