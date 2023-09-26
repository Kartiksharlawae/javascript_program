// Readline Sync library for reading value from cmd
var readlineSync = require('readline-sync');

// Display Statement
var number = readlineSync.questionInt("Enter values:")

// do while loop
let i = 1;
// body  
do {      
  console.log(number * i);
  i++;
}
//condition 
while (i <= 10);
  console.log("End program:")