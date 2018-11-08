// 1.What does it do? make sure to explain all the parameters. 
// the map method calls a function and creates a new array from what the function does to each element. It is in 
// order. The map has two parameters, first is a callBack function that takes in a currentValue, index and the array.
// Second is thisArg which allows the callBack to have a this. 
//
// 2.Does it edit the current array?
// No it doesn't
//
// 3.What does it return?
// it returns a new array with elements that wer emodified form the first array, in order. 
//
// 4.How can I use this? Come up (not one off the internet) with a small real world example and explain it.
// You are a body builder and you want to figure out how many movements you will do for a particular workout plan 
// over the course of the year.
//
// 5.Build your real world example.

let workoutReps = [30, 30, 30, 45, 15, 20]

let repsPerYear = workoutReps.map(function(element){

    let year = (element * 2) * 52

    return year
});

console.log(repsPerYear);