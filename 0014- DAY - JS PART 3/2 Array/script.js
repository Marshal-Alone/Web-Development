// Practice Qs


// Qs. For the given start state of an array, change it to final form using methods.
// start: [january' ,'july','march', 'august' ]
// final : [['july','june', 'march', 'august' ]

let start = ['january', 'july', 'march', 'august'];
console.log(`START : ${start}`);
start.shift();
start.shift();
start.unshift('june');
start.unshift('july');
console.log(`AFTER : ${start}`);

console.log('\n');

let a = [100, 20, 30, 40, 50];
let c = ["a", 'd', 'e', 'z', 'b'];






// Practice Qs

// Qs. For the given start state of an array, change it to final form using splice.
// start=['january', 'july', 'march', 'august'];
// final = ['july', 'june', 'march', 'august'];

let start2 = ['january', 'july', 'march', 'august'];
console.log(`START : ${start2}`);
start2.splice(0, 2, 'july', 'june');         // start2.splice(0, 1);
// start2.splice(1,0, 'june');
console.log(`FINAL : ${start2}`);

console.log('\n');


// Qs. Return the index of the "javascript" from the given array, if it was reversed.
// ['html', 'javascript', •python', 'java', •c#','sql']

let arr = ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];
console.log(`arr= ${arr}`);
let reversed = arr.reverse();
console.log(`REVERSED = ${reversed}`);
let index = reversed.indexOf('javascript');
console.log(`Index = ${index}`);





//PRACTICE QUESTION

// Qs. Create a nested array to show the following tic-tac-toe game state.
// X |   | O
//   | X |
// X |   | X

let arr2 = [['X',' ','O'],[' ','X',' '],['O',' ','X']];