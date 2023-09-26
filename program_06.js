// Function to get the day of the week
function getDayOfWeek(number) {
    switch (number) {
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
            return "Saturday";
        default:
            return "Invalid day number";
    }
}

var result = getDayOfWeek(16)

console.log(result)

