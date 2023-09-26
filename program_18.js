// Readline Sync library for reading value from cmd
var readlineSync = require('readline-sync');

// Display Statement
var number = readlineSync.questionInt("Enter values:")

// do while loop
 let i=0;

// Even number / Odd numbers
do {
    
    if(i%2 == 0)
    {
        console.log("Even number :"+i)
    } else {
        console.log("Odd number :"+i)
    }
    i++;
 }while( i <= number)
 // End Program
 console.log("End program")