//                  q1
//Write an arrow function that returns the square of a number 'n'.
const square = (n) => (n * n);
console.log(square(5));







//                  Q2
//Write a function that prints "Hello World" 5 times at intervals of 2s each.

let id1 = setInterval(() => {
    console.log("Hello World");
}, 2000)
setTimeout(() => {
    clearInterval(id1);
}, 10000)

// let count = 0;
// let id2 = setInterval(() => {
//     console.log("Hello World");

//     if (count == 5) {
//         clearInterval(id2);
//     }
//     count++;
// }, 2000)

