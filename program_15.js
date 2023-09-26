// Readline Sync library for reading value from cmd
var readlineSync = require('readline-sync');

// Display Statement
var number = readlineSync.questionInt("Enter values:")

// while loop
let i=1;

// Multiplication Table
while( i <= 10) {
    
    console.log("Number is :"+ number*i)
    
    i++;
 }
 // End Program
 console.log("End program")
