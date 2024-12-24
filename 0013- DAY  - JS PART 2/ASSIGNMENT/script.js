// Ql. Create a number variable num with some value.
//Now, print "good" if the number is divisible by 10 and print "bad" if it is not.

let num = 20;
if (num%10==0) {
    console.log("GOOD NUMBER !!");
} else {
    console.log("BAD NUMBER ");
}
console.log('\n');

// ------------------------------------------------------------------------------------


//Q2. Take the user's name & age as input using prompts.
//Then return back the following statement to the user as an alert (by substituting
//    their name & age) :
//    name is age years old.
//[Use template Literals to print this sentence]

// let name = prompt("Enter your name ");
// let age = prompt("Enter your age");
// alert(`${name} is ${age} years old`)

// console.log("\n")




// ------------------------------------------------------------------------------------





//Q3. Write a switch statement to print the months in a quarter.
//Months in Quarter 1 : January, February, March
//Months in Quarter 2 : April, May, June
//Months in Quarter 3 : July, August, September
//Months in Quarter 4: October, November, December
//[Use the number as the case value in switch]

let quarter = 1;
switch (quarter) {
    case 1:
        console.log("January, February, March");
        break;
    case 2:
        console.log("April, May, June");
        break;
    case 3:
        console.log("July, August, September");
        break;
    case 4:
        console.log("October, November, December");
        break;
    default:
        console.log("Invalid QUARTER !");
}
console.log('\n');




// ------------------------------------------------------------------------------------





//Q4. A string is a golden string if it starts with the character 'A' or 'a' and has a total
//length greater than 5.
//For a given string print if it is golden or not.

let str = "apples";
if ((str[0]==='a' || str[0]==='A') && str.length>=5) {
    console.log(`${str} is a GOLDEN STRING`);
} else {
    console.log(`${str} is not a GOLDEN STRING`);
}
console.log('\n');




// ------------------------------------------------------------------------------------




// Q5. Write a program to find the largest of 3 numbers.
let num1 = 100;
let num2 = 200;
let num3 = 150;

if (num1>=num2 && num1>=num3) {
    console.log(`${num1} is greater than ${num2 },${num3}}`);
}else if (num2>=num1 && num2>=num3) {
    console.log(`${num2} is greater than ${num1 },${num3}}`);
}else{
    console.log(`${num3} is greater than ${num1 },${num2}`);
}
console.log('\n');




// ------------------------------------------------------------------------------------




// Q6 (Bonus). Write a program to check if 2 numbers have the same last digit.
// Eg : 32 and 47852 have the same last digit i.e. 2

// let numb1 = prompt("Enter num1");
// let numb2 = prompt("Enter num2");
let numb1 = 12345;
let numb2 = 98765;
let lastDigit1 = numb1%10
let lastDigit2 = numb2 % 10

if (lastDigit1 === lastDigit2) {
    console.log(`${numb1} & ${numb2} have same last digit i.e ${lastDigit1}`)
} else {
    console.log(`${numb1} & ${numb2} does not have same last digit i.e ${numb1}=${lastDigit1} & ${numb2}=${lastDigit2}`)

}