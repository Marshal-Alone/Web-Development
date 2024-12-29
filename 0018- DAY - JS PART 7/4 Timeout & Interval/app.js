// console.log("Hello");
// const fun = () => {
//     console.log("Apna College");
// }
// setTimeout(fun, 2000);
// console.log("Welcome to");



let id = setInterval(() => {
    console.log(id, ": Apna");
}, 2000);


let id2 = setInterval(() => {
    console.log(id2, ": College");
}, 3000)

clearInterval(id);
clearInterval(id2);
