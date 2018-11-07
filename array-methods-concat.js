// 1.What does it do? make sure to explain all the parameters. 
// The concat argument creates a new array from the object that it is called on followed
// by the object or elements that are provided to it as arguments.
//
// 2.Does it edit the current array?
// No it does not.
//
// 3.What does it return?
// It returns the new array that was created. 
//
// 4.How can I use this? Come up (not one off the internet) with a small real world example and explain it.
// You have a collection of shoes. You store your shoes names in an array. You buy another collection.
// Instead of adding each of the shoes individually, you put them together in a new array.
//
// 5.Build your real world example.

let myShoeCollection = ['Bred 1', 'Black Cement 3', 'White Cement 4', 'Tokyo 5'];
// My shoes collection
let theirShoeCollection = ['Bred 4', 'Royal 1', 'Concord 11', 'Flu Game 12'];
// Their Shoe Collection
let newShoeCollection = myShoeCollection.concat(theirShoeCollection);
// Put them together
console.log(newShoeCollection);
// Expect Array(8) ["Bred 1", "Black Cement 3", "White Cement 4", "Tokyo 5", "Bred 4", "Royal 1", "Concord 11", "Flu Game 12"]