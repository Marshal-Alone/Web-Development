function Add_and_Append(elementId, heading, content, type) {
    if (!type) {
        type = "div";
    }
    if (!elementId) {
        elementId = "new_element";
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


const sum = (a, b) => {
    console.log(a + b);
}

const cube = (n) => {
    console.log(Math.pow(n, 3));
}


//      Implcicit return statement
const mul1 = (a, b) => a * b;

const mul2 = (a, b) => (
    a * b
)



const sum2 = (a, b) => a + b;
const cube2 = (a) => (a * a * a);

Add_and_Append("sum", `Sum(5,5)`, sum2(5, 5));
Add_and_Append("Cube", `Cube(5,5)`, cube2(5, 5));
Add_and_Append("Mul", `Mul(5,5)`, mul2(5, 5));


//              this with arrow function
const student = {
    name: "Aman",
    marks: 100,
    prop: this,

    getName: function () {
        return this.name;
    },

    getname2: () => {
        console.log(this); //parent scope -> window
        return this.name;
    },

    getInfo1: function () { //parent
        setTimeout(() => {
            console.log(this); //student, parent-> function
        }, 2000);
    },

    getInfo2: function () {
        setTimeout(function () {
            console.log(this); //window, parent ->window, setTimeout is method of window object
        }, 2000);
    }
};

