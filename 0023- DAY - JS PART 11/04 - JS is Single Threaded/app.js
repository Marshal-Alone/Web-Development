
setTimeout(() => {
    console.log("HELLO WORLD !!");
}, 5000);
setTimeout(function () {
    clearTimeout(sec);
    console.log("Apna COllege");
}, 10000);

let i = 1;
let sec = setInterval(function () {
    console.log(`..${i} sec ..`);
    i++;
}, 1000);

console.log("Hello....");
