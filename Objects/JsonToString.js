const jsonString = `{ "name" : "Swapnil", 
                       "Clg" : "DITMS",
                       "lastName" : "Shelke"
}`;

const string = JSON.parse(jsonString);
console.log(string);
console.log(string.name);

// const parsedString = JSON.parse(jsonString);

// console.log(parsedString);
// console.log(parsedString.bookname);
