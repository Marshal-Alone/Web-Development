//                          TRAFFIC SYSTEM
// let color = 'red';
// if (color==="red") {
//     console.log(`STOP !! :light color is ${color}`);
// }else if (color==="green") {
//     console.log(`GO :light color is ${color}`);
// } else ifif (color==='yellow') {
//     console.log(`Slow Down :light color is ${color}`);
// }
// console.log("\n");





//                          MARKING SYSTEM

// let marks = 105;
// if (marks>80) {
//     console.log("A+");
//     // console.log(marks);
// }else if (marks>=60 && marks<=80) {
//     console.log("A");
//     // console.log(marks);
// }else if (marks>=33 && marks<=60) {
//     console.log("B");
//     // console.log(marks);
// }else if (marks<33) {
//     console.log("Fail !!");
//     // console.log(marks);
// }


//                              PRACTICE Q 
    // : Create a system to calculate popcorn prices based on the size customer asked for :
let size = 'XLL';

if (size=='XL') {
    console.log("Price is Rs. 250");
}else if (size=='L' ) {
    console.log("Price is Rs. 200");
}else if (size=='M' ) {
    console.log("Price is Rs. 100");
}else if (size=='S') {
    console.log("Price is Rs. 50");
} else {
    console.log(`Size not proper : ${size}`);
}
console.log('\n');


//                              PRACTICE Q
// A "good string" is a string that starts with the letter 'a' & has a length > 3. Write a Program to find if a string is good or not.

let str = "appl";

if ((str[0]==='a') && (str.length>3)) {
    console.log(`${str} is a "GOOD STRING"`);
}
else {
    console.log(`${str} is a "NOT GOOD STRING"`);
}

 if ("  ") {
    console.log("True");
 } else {
     console.log("False");
}
console.log('\n');


//                              SWITCH STATEMENT
let color = "red";
switch (color) {
    case "red":
        console.log("STOP !");
        break;
    case "green":
        console.log("GO GO GO");
        break;
    case "yellow":
        console.log("SLOW DOWN");
        break;
    default:
        console.log("TRAFFIC LIGHT IS BROKEN");
}
console.log('\n');



//                              PRACTICE Q
//Q:Use switch statement to print the day of the week using a number variable
//'day' with values 1 to 7.

let day = 5;
switch (day) {
    case 1:
        console.log("Today is - MONDAY");
        break;
    case 2:
        console.log("Today is - TUESDAY");
        break;
    case 3:
        console.log("Today is - WEDNESDAY");
        break;
    case 4:
        console.log("Today is - THURSDAY");
        break;
    case 5:
        console.log("Today is - FRIDAY");
        break;
    case 6:
        console.log("Today is - SATURDAY");
        break;
    case 7:
        console.log("Today is - SUNDAY");
        break;
    default :
        console.log("INVALID VALUE");
}

console.log('\n');

//                                                ALERT & PROMPT

console.log("This is simple log");
console.error("This is error")
console.warn("This is warning")

console.log('\n');

// alert("Something is wrong");5555

//let roll = prompt("Enter your roll no");
// console.log(roll);

let firstName=prompt("Enter first name")
let lastName = prompt("Enter last name")
fullName=`Welcome ${firstName+" "+lastName} !!`
alert(fullName);