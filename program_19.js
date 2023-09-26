// Readline Sync library for reading value from cmd
var readlineSync = require('readline-sync');

// Display Statement
var number = readlineSync.questionInt("Enter values:")

let i = 0;

do{
    console.log(" Number is  :"+i);
    i++;
}
while( i <= number)
console.log("End program")