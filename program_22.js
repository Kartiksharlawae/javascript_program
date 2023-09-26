//flipn coin program

// Readline Sync library for reading value from cmd
var readlineSync = require('readline-sync');

// Display Statement
var num = readlineSync.questionInt("How many times do you want to flip the coin?");
var head = 0;
var tail = 0;
if (num > 0) // number is greater than 0
{
  for (var i = 0; i < num; i++) {
    var r = Math.random()
    if (r < 0.5) {
      tail++
    }
    else {
      head++
    }
  }
}
console.log("count of tails:" + tail)
console.log("count of heads:" + head)

// percentage calculation
var tail_per = (tail / num) * 100
var head_per = (head / num) * 100

//show percentage
console.log("percentage of tail:" + tail_per)
console.log("percentage of head:" + head_per)

console.log("End program")
