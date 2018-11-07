// 1.What does it do? make sure to explain all the parameters. 
// If it has a function as a parameter, make sure to explain all of the parameters for that function.
// unshift adds an element to the front of the array.
//
// 2.Does it edit the current array?
// Yes it does, it adds an element to the front of the array.
//
// 3.What does it return?
// The return element is the new length of the array.
//
// 4.How can I use this? Come up (not one off the internet) with a small real world example and explain it.
// You are making a to do list for the day, of which the order is unimportant.
// Unshift allows you to add a to-do item to the front of the array.
//
// 5.Build your real world example.

let todoList = [];

console.log(todoList.unshift('Jog'));
// James Weeks
console.log(todoList.unshift('Plan week'));
// Bob Lopez
console.log(todoList.unshift('Buy groceries'));
// Steve Marsh
console.log(todoList.unshift('Work'));
// 
console.log(todoList.unshift('Go to movie'));