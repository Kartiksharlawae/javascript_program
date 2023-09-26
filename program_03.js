
// Readline Sync library for reading value from cmd
var readlineSync = require('readline-sync');

// Display Statement
var input = readlineSync.questionInt("Enter Value :")

// Output
console.log(input)

// 2 multiplication table
// Odd and Even number generation

/**
 * For Loop
 */
for(var i = 0; i <= input; i++)
{
   console.log("Loop Value :", i)
}