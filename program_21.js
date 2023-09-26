// string replace program//
// Readline Sync library for reading value from cmd
var readlineSync = require('readline-sync');

let statement = "hello <<username>>, how are you!";
console.log(statement)

let str1  ="<<username>>"

// Display Statement
let str2 = readlineSync.question("Enter your name :")

// Replace string with given name
let result = statement.replace("str1", "str2")

console.log(result)
