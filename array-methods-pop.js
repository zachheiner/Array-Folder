// 1.What does it do? make sure to explain all the parameters. 
// If it has a function as a parameter, make sure to explain all of the parameters for that function.
// Pop removes the last element in the array.
//
// 2.Does it edit the current array?
// Yes it does, it removes the last element in the array.
//
// 3.What does it return?
// The return value is the element that has been popped off, or undefined if the array is empty.
//
// 4.How can I use this? Come up (not one off the internet) with a small real world example and explain it.
// You have an array of parts needed for a car repair. As you buy them they are taken off the array.
//
// 5.Build your real world example.

let partsList = ['oil', 'filter', 'funnel', "oil pan", 'paper towels', 'ratchets'];

console.log(partsList.pop());
// ratchets
console.log(partsList.pop());
// paper towels
console.log(partsList.pop());
// oil pan
console.log(partsList);
// Array has 3 elements now - oil, filter, and funnel