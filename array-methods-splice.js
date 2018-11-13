// 1.What does it do? make sure to explain all the parameters. 
// The splice method allows yo uto change the contents of an array by removing and/ or adding new elements
// There are 3 parameters. First is the start which is the index at which to start the change. Second is 
// the deleteCount which is how many of the old elements in the array will be deleted. Lastly, there are the 
// items, which are as many as you want added into that spot.
//
// 2.Does it edit the current array?
// Yes it does. It can delete and add elements at specific spot into the array.
//
// 3.What does it return?
// The return value is an array containing all of the deleted elements.
//
// 4.How can I use this? Come up (not one off the internet) with a small real world example and explain it.
// You are a project manager for a semester long project, that a whole class is involved in. You have several
// team leads that are revolving. Several will be switching out each week. Splice can do this for you.
//
// 5.Build your real world example.


let teamLeads = ['Samantha', 'Christian', 'John', 'Ralph', 'Anthony', 'Conrad', 'Peter'];
// create the array
console.log(teamLeads.splice(1, 3, 'Tom','James', 'Rachel'));
// starting at index 1, delete 3, add Tom James and Rachel
console.log(teamLeads);
// show the array after