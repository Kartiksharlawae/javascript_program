// Readline Sync library for reading value from cmd
var readlineSync = require('readline-sync');

// Display Statement
var age = readlineSync.questionInt("Enter Age:")

if(age >= 18 )
{
    console.log("Eligible for Vote")
} else {
    console.log("Not Eligible for Vote")
}

console.log("End calender")