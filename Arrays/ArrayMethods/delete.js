const fruits = ["Banana", "Orange", "Apple", "Mango"];

delete fruits[0];
console.log(fruits[0]);
console.log(fruits);

// Output
// undefined
// [ <1 empty item>, 'Orange', 'Apple', 'Mango' ]
