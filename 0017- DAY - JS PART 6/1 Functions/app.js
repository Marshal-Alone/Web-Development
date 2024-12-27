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
}

// Function with arguments

{
    print_name("Aman", 25);
    function print_name(name = "user", age = 18) {
        let content = `\n${name} is ${age} yeaars old`

        Add_and_Append("nameDiv", "MSG", content);

        console.log(content);
    }
}


sum(10, 20);
function sum(a, b) {
    console.log(`Sum is : ${a + b}`);
    Add_and_Append("sum-div", `Sum  ${a} + ${b} `, a + b);
}


//          return keyboard
{
    function sum(a, b) {
        return a + b;
    }
    Add_and_Append("sum_return", `Sum is`, sum(10, 20));

    function isAdult(age) {
        if (age >= 18) {
            return "Adult";
        } else {
            return "Minor";
        }
    }
    Add_and_Append("isAdult", `Aman is`, isAdult(25));
}


//Function Expression

const sum2 = function (a, b) {
    return a + b;
}

sum2(1, 2);
console.log(sum2(5, 5));


//Higher Order Function

{
    function multipleGreet(func, n) {
        for (let i = 1; i <= n; i++) {
            func();
        }
    }

    function greet() {
        console.log("Greetings");
    }

    multipleGreet(greet, 5);
}


//Higher Order Function Return
{
    function oddEvenTest(request) {
        if (request == "odd") {
            function odd(n) {
                if (!(n % 2 == 0)) {
                    console.log("Odd");
                    return "odd";
                } else {
                    console.log("Not odd");

                }
            }
            return odd;
        } else if (request == "even") {
            return function (n) {
                if (n % 2 == 0) {
                    console.log("Even");
                    return "even";
                } else {
                    console.log("Not Even");

                }
            }
        } else {
            console.log("wrong request");
        }
    }
    let req = "odd";
    // let req = "even";
    let test = oddEvenTest(req);
    test(9);

    Add_and_Append("high-order-reTurn", `9 is `, test(9));
}




//Methods

const calculator = {
    add: function (a, b) {
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    },
    mul: function (a, b) {
        return a * b;
    },
};

calculator.add(10, 10);
calculator.sub(10, 10);
calculator.mul(10, 10);

Add_and_Append("calc", `calculator.add(10, 10)`, calculator.add(10, 10));

Add_and_Append("calc", `calculator.sub(10, 10)`, calculator.sub(10, 10));

Add_and_Append("calc", `calculator.mul(10, 10)`, calculator.mul(10, 10));

//shorthand
const calculator2 = {
    add(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a - b;
    }
}
console.log(calculator2);
console.log(calculator2.add(5, 5));


