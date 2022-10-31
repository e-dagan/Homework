// Chapter 1

console.log("Hi my name is Elena!");
console.log(21);
console.log(6+3)
console.log(6-3)
console.log(6*3)
console.log(6/3)

// Chapter 2

// const name1 = prompt("Enter your name!:");

// console.log("wow it's super nice to meet", name1)



let number1 = 5;
let number2 = 3;

both = number1 + number2 

console.log(both - number1); // Should show 3
console.log(both - number2); // should show 5


// Chapter 3

// const day = prompt("Enter a day of the week:");
// if (day === "Monday") {
// console.log("Tuesday");
// } else if (day === "Tuesday") {
// console.log("Wednesday");
// } else if (day === "Wednesday") {
// console.log("Thursday");
// } else if (day === "Thursday") {
// console.log("Friday");
// } else if (day === "Saturday") {
// console.log("Sunday");
//  } else if (day === "Sunday") {
// console.log("Monday");
// } else {
// console.log("Not a valid day of the week");
// }


// Write a program that accepts a month number (between 1 and 12), then shows the number of
// days of that month. Leap years are excluded. Incorrect inputs must be taken into account.


const day = prompt("Enter a month number:");
if (day === "1") {
console.log("31 days");
} else if (day === "2") {
console.log("28 or 29 Days");
} else if (day === "3") {
    console.log("31 days");
} else if (day === "4") {
console.log("30 Days");
} else if (day === "5") {
    console.log("31 days");
} else if (day === "6") {
console.log("30 Days");
} else if (day === "7") {
console.log("31 days");
 } else if (day === "8") {
console.log("31 Days");
} else if (day === "9") {
console.log("30 days");
} else if (day === "10") {
console.log("31 Days");
} else if (day === "11") {
console.log("30 Days");
 } else if (day === "12") {
console.log("31 days");
} else {
console.log("Not a valid month");
}

 