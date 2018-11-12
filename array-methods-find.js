// 1.What does it do? make sure to explain all the parameters. 
// The find method returns the value of the first element in the array that coreesponds with the
// logic introduced in the provided testing function. There are two parameters. First is the callback,
// which is the function that is called to test the element. It takes in the current element, the index
// for the element, and the array that is being used. Also there is a thisArg parameter which is used as
// this when executing the callBack function
// 2.Does it edit the current array?
// No it doesn't.
//
// 3.What does it return?
// The return value is the value of the first element that satisfies the testing function.
//
// 4.How can I use this? Come up (not one off the internet) with a small real world example and explain it.
// You are given an array of all the students in a class and they have grades associated with their name.
// You need someone to help another boy in the class. You are able to find someone who is a boy and has over a 95 in the class.
//
// 5.Build your real world example.

let classList = [{name:"John", grade:86, gender:'M'}, {name:"Zach", grade:89, gender:'M'}, {name:"Sam", grade:65, gender:'F'},
 {name:"Brooke", grade:92, gender:'F'}, {name:"Tyler", grade:95, gender:'M'}, {name: "Lexi", grade:78, gender:'F'}];
// generate class list w/ names grades and gender

 let match = classList.find(function(person) {
     if(person.gender === 'M'){
         if (person.grade > 90){
             return person;
         }
     }

 });
// function limits the search to those who are male and have a grade over 90

 console.log(match.name);
// expect Tyler as the result.