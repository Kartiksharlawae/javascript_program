//  multiplication table

// Readline Sync library for reading value from cmd
var readlineSync = require('readline-sync');

// Display Statement
var number = readlineSync.questionInt("Enter Value :")

// Display the multiplication table
console.log(`Multiplication Table for ${number}:`);

// For loop
for (let i = 1; i <= 10; i++) {
    var result = number * i;

    // Output row
    console.log(`${number} * ${i} = ${result}`);
}

// End Program
console.log("End Table")
