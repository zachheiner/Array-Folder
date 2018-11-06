// 1.What does it do? make sure to explain all the parameters. 
// If it has a function as a parameter, make sure to explain all of the parameters for that function.
// shift removes the first element in the array.
//
// 2.Does it edit the current array?
// Yes it does, it removes the first element in the array.
//
// 3.What does it return?
// The return value is the element that has been removed, or undefined if the array is empty.
//
// 4.How can I use this? Come up (not one off the internet) with a small real world example and explain it.
// If you have an array in which names for ministering appointments have been stored into.
// As you do your ministering appointments, the names are shifted off the array.
//
// 5.Build your real world example.

let ministering = ['James Weeks', 'Bob Lopez', 'Steve Marsh'];

console.log(ministering.shift());
// James Weeks
console.log(ministering.shift());
// Bob Lopez
console.log(ministering.shift());
// Steve Marsh
console.log(ministering);
// undefined