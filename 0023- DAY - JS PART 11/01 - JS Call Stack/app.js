function hello() {
    console.log("Inside hello()");      //4

    console.log("Hello there");         //5

    console.log("Exiting hello");         //5
}

function greet() {
    console.log("Inside greet()");       //2

    console.log("Calling hello()");      //3
    hello();

    
    console.log("Exiting greet");         //5
}

console.log("Calling greet()");          //1
greet();
console.log("DONE , BYEEEEE !!!");       //6