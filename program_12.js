//leap year
// Readline Sync library for reading value from cmd
var readlineSync = require('readline-sync');

// Display Statement
var year = readlineSync.questionInt("Enter year:")

// if ((year % 4 === 0 && year % 100 === 0) || year % 400 === 0) {

// If year is divided by 4
if(year%4 == 0)
{
    // Century
    if(year%100 == 0)
    {
        // Correction
        if(year%400 ==0)
        {
            console.log(year+" is leap year")
        } else {
            console.log(year+" not a leap year")
        }
    } else {
        console.log(year+" is leap year")
    }
} else {
    console.log(year+" not a leap year")
}

console.log("End Program")