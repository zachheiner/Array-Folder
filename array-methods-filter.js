// 1.What does it do? make sure to explain all the parameters. 
// Filter creates a new array containing elements that pass the requirments of the function that is 
// passed to the method. It has two parameters. First, is the callBack function which is in place to test the
// current elements. This function takes the element being tested the index and the array itself as a parameter.
// There is also a thisArg that allows the refernce of this in the callBack.
//
// 2.Does it edit the current array?
// No it doesn't
//
// 3.What does it return?
// It returns a new array that contains the element that passes the filter. If there are no elements that pass,
// an empty array will be returned.
//
// 4.How can I use this? Come up (not one off the internet) with a small real world example and explain it.
// You are a mail carrier and you drop all your mail. You write a program to sort the mail into even and odd 
// so that you know which side of the street you are going to be on. Additionally you can call a sort on the 
// the new array and have a sorted array. 
//
// 5.Build your real world example.


let addresses = [1234, 4356, 1245, 2343, 2437, 3548, 1114, 2243, 1241, 1342];
// All of the address in the array
let evenSide = addresses.filter(function(item){
    if(item % 2 === 0){
        return true;
    }
    else{
        false;
    }
})
// use mod to sort even 

console.log(evenSide);
// look at the new array

let oddSide = addresses.filter(function(item){
    if(item % 2 != 0){
        return true;
    }
    else{
        false;
    }
})
// use mod to sort odd

console.log(oddSide);
// look at the new array

let sortedOdd = oddSide.sort();
//sort it so it is in order
let sortedEven = evenSide.sort();

console.log(sortedOdd);
console.log(sortedEven);
// look at the new arrays