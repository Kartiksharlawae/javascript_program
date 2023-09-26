
// Readline Sync library for reading value from cmd
var readlineSync = require('readline-sync');

// Display Statement
var input = readlineSync.questionInt("Enter Case Value :")

// Output
console.log(input)


/**
 * Switch Statement
 */
switch(input)
{
    case(10) :
       console.log("Value 10")
       break;
    case(20) :
       console.log("Value 20") 
       break;
    default :
        console.log("Please enter correct value") 
        break;
}