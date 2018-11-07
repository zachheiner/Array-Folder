// 1.What does it do? make sure to explain all the parameters. 
// The forEach method loops through the function for each element inside the array.
// The method has a parameter, callback which is the function that is executed for
// the array. It takes in 3 arguments with an option for a this object. The main
// three are the currentValue, the index of the value and the array that it is being applied to. 
//
// 2.Does it edit the current array?
// No it does not.
//
// 3.What does it return?
// Undefined 
//
// 4.How can I use this? Come up (not one off the internet) with a small real world example and explain it.
// You have ten employees, your team just recieved a giant contract and you are going to give them
// each a 1.50 raise. 
//
// 5.Build your real world example.

var teamMembers = [ { name: 'Tim', pay: 15 }, { name: 'Andy', pay: 25 }, { name: 'Seth', pay: 11 },
    { name: 'Ryan', pay: 17 }, { name: 'Joe', pay: 30 }, { name: 'Zach', pay: 37 },
    { name: 'Vicky', pay: 13 }, { name: 'Todd', pay: 20 }, { name: 'Rachel', pay: 26 },
    { name: 'Sarah', pay: 18 }
  ];
  // Array with all the employees names and their pay

teamMembers.forEach( function(team){
    // for each element in the team
    console.log(team);
    //print the element you are working with
    if (team.pay < 100){
        //if the team mate isnt the owner
        team.pay += 1.50;
        //add 1.50 to their pay
    }

    console.log(team)
    // show the change


});

