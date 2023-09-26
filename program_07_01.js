// find the largest number of three numbers

// Readline Sync library for reading value from cmd
var readlineSync = require('readline-sync');

// get first number
var num1 = readlineSync.questionInt("Enter first Value :")

// get second number
var num2 = readlineSync.questionInt("Enter second Value :")

// get third number
var num3 = readlineSync.questionInt("Enter third Value :")

if (num1>=num2 && num1>=num3)
{
    console.log(num1);
} else if (num2>=num1 && num2>=num3)
{
    console.log(num2);
} else  
{
    console.log(num3);
}


/**
 * Num1 = 40
 * Num2 = 20
 * Num3 = 60
 * 
 * 
 * if(Num1 >= Num2 && Num1 >= Num3 ) ==> true && false ==>
 * 
 * logical operation
 * 
 * && - and
 * 
 * true && true = true
 * true && false = false
 * false && true = false
 * false && false = false
 * 
 * || - or
 * 
 * true || true = true
 * true || false = true
 * false || true = true
 * false || false = false
 * 
 */