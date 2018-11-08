// 1.What does it do? make sure to explain all the parameters. 
// The every method tests wether all the elements in the array pass the test that is implemented
// function that is provided to it. It has 4 parameters. the first is the currentValue meaning 
// element being processed. Second is the index of the current element. Third, is the array that
// it is being called on. Fourth, is thisArg which is a value to use as this when executing the callback.  
//
// 2.Does it edit the current array?
// No it doesn't
//
// 3.What does it return?
// it returns a boolean, so either true if all the elements pass, or false if they do not.
//
// 4.How can I use this? Come up (not one off the internet) with a small real world example and explain it.
// You have a group of scouts that you are going to be taking on a camping trip. You have all of the ages 
// of each of the scouts in an array. The council asks to make sure your all of your scouts are the right age.
//
// 5.Build your real world example.

function areTheyOldEnough(element, index, array){
    return element >= 12;
}
// create the function that the boys need to be 12 or over
let scoutsAge = [12, 11, 13, 14, 15, 17, 12, 13, 16];
// array of Scouts ages
console.log(scoutsAge.every(areTheyOldEnough));
// Expected output false - looks like little Jimmy is not going.