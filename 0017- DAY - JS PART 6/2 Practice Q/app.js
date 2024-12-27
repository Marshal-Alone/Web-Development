//Function to add and append a div to body with result
function Add_and_Append(elementId, heading, content, type) {
    if (!type) {
        type = "div";
    }
    if (!elementId) {
        elementId = "type";
    }
    let newElement = document.createElement(type);
    if (heading) {
        newElement.innerHTML = "<b>" + heading + "</b> : " + content + " <br><br>";
    } else {
        newElement.innerHTML = content;
    }
    newElement.id = elementId;
    document.body.appendChild(newElement);

    console.log(newElement.innerText);
}



//              Q1
//Create a function that prints a poem.
print_poem();
function print_poem() {
    let poems = `Twinkle, twinkle, little star,
    How I wonder what you are!`

    Add_and_Append("poem_div", "POEM IS ", poems);

}






//              Q2
//Create a Function to roll a dice & always display the value of the dice (1 to 6).

roll_die();
function roll_die() {
    let result = Math.floor(Math.random() * 6) + 1;
    console.log(result);

    let content = `Die rolled : ${result}`;

    Add_and_Append("die_div", "Die rolled", result);

}





//               Q3
//Create a Function that gives us the average of 3 numbers.
q3();
function q3() {
    average_of_3(10, 20, 30);
    function average_of_3(a, b, c) {
        let avg = (a + b + c) / 3;

        Add_and_Append("averageOf3", "Average of 3", avg);
    }

    average(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    function average(...numbers) {
        let sum = numbers.reduce((acc, num) => acc + num, 0)

        let avg = sum / numbers.length;
        console.log(avg);

        Add_and_Append("avg-of-all", `Average of all`, avg);


    }
}


//              Q4
//Create a Function that prints the multiplication table of a number.
table(2);
function table(n) {
    for (let i = 1; i <= 10; i++) {
        let table = (`${n} x ${i} = ${n * i}`);
        Add_and_Append("table", `TABLE`, table);
    }
}




//              Q5
//Create a Function that returns the sum of numbers from 1 to n.
// sum_to_n(10);
{
    sum_to_n(10);
    function sum_to_n(n) {
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            sum += i;
        }
        return sum;
    }
    Add_and_Append("sum-to-n", `Sum from 1 to ${10}`, sum_to_n(10))
}


//              Q6
//Create a Function that returns the concatenation of all strings in an array
{
    arr = ["Hello, ", "myself ", "Marshal", "Alone"];
    concat(arr);
    function concat(arr) {
        newStr = "";
        arr.forEach(str => {
            newStr += str;
        })

        Add_and_Append("concat", `String`, newStr);
    }

    function conc(arr) {
        return arr.reduce((prev, curr) => prev + curr, '')
        // let str = arr.reduce((prev, curr) => {
        //     return prev + curr;
        // },'')
        // return str;
    }
    let str = conc(arr);
    console.log(str);
}




//              Q7
// What will be output
{
     let greet = "hello";
    function changeGreet() {
        let greet = "namaste";
        console.log(greet);

        function innerGreen() {
            console.log(greet);
        }

        innerGreen();
    }
    console.log(greet);
    changeGreet();

    Add_and_Append("q6", `Output`, `hello \ngreet \ngreet`);
}


