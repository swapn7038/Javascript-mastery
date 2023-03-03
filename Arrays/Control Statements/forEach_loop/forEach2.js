var names = ["name1", "name2", "name3", "name4", "name5"];

names.forEach((element, index, array) => {
  console.log(element + " " + "index " + index + " " + array);
});

// name1 index 0 name1,name2,name3,name4,name5
// name2 index 1 name1,name2,name3,name4,name5
// name3 index 2 name1,name2,name3,name4,name5
// name4 index 3 name1,name2,name3,name4,name5
// name5 index 4 name1,name2,name3,name4,name5
