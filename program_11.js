// grade of student
// Readline Sync library for reading value from cmd
var readlineSync = require('readline-sync');

// Display Statement
var marks = readlineSync.questionInt("Enter marks:")

if(marks >= 90)
{
    console.log("A+")
} else if(marks >= 80)
{
    console.log("A")
} else if(marks >= 70)
{
    console.log("B")
} else if(marks >= 60)
{
    console.log("C")
} else if(marks >= 50)
{
    console.log("D")
} else {
    console.log("Failed")
}

console.log("End Program")


    
