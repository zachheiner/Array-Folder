// 1.What does it do? make sure to explain all the parameters. 
// The sort method sorts the array without making a copy of it. The default
// sort method is based on unicode code points. There is a parameter option.
// The parameter is a compareFunction that defines the sort order.
//
// 2.Does it edit the current array?
// Yes it does, but only the order not the actual items in the array.
//
// 3.What does it return?
// It returns the sorted array. 
//
// 4.How can I use this? Come up (not one off the internet) with a small real world example and explain it.
// 1. You have a list of animals. You would like to sort their names in alphabetical order. 
// 2. You are delivering mail on a street but it is all mixed up. You want it sorted in order.
//
// 5.Build your real world example.

let animals = ['Mechagodzilla', 'Anguirus', 'Rodan', 'King Kong', "Godzilla", "Mothra"];
// set the array
animals.sort();
// Sorts based on the capital letter first, if you wanted to make sure this is fixed,
// you would need a function to toUpper all of them
console.log(animals);
// Expected result
//Array(6) ["Anguirus", "Godzilla", "King Kong", "Mechagodzilla", "Mothra", "Rodan"]


let numbers = [2212, 2213, 2227, 3475, 3241, 1234, 1345, 1246, 1457, 1358, 1459, 1689, 1688]
// numbers are loaded in the array
console.log(numbers);
// check the array
numbers.sort(function(a, b){
    if (a < b){
        return -1;
        // if a is less than b, leave it.
    }
    if (a > b){
        return 1;
        // if b is less than a switch them
    }
})


console.log(numbers);
//check the array