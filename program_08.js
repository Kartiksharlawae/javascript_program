//Write a program to find the given number is a prime number

// Readline Sync library for reading value from cmd
var readlineSync = require('readline-sync');

// get number
var number = readlineSync.questionInt("Enter the Value :")

console.log("Given Number is :"+number)

// Status flag
var flag = true;

// Neglect 0 and 1
if(number == 0 || number == 1)
{
    flag = false;
} else {
    // Loop for indivitual numbers
    for(let i= 2; i < number; i++)
    {
        // Check mod with each number
        if(number%i === 0)
        {
            flag = false;
            break;
        }
    }
}


// Output Generate
if(flag)
{
    console.log(number +" is prime number")
} else {
    console.log(number +" is not prime number")
}

