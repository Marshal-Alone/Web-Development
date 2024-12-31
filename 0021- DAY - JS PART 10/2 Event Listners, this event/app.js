let btn = document.querySelector("btn");
let btns = document.querySelectorAll('button');

btns.forEach(btn => {
    btn.addEventListener("click", function () {
        console.log(btn.innerText, "clicked");
    });
    btn.addEventListener("click", greet);
    btn.addEventListener("click", say_name);

    btn.addEventListener("dblclick", dbl_click)
});

function greet() {
    console.log("Hiiiii !!");
}
function say_name() {
    console.log("Apna College !!");
}

function dbl_click() {
    console.log("You Double clicked ");
}

//event listener for div
const box = document.querySelector("div");
box.innerText = "Bring cursor inside to print"

box.addEventListener("mouseenter", () => {
    console.log("mouse innside div");
})


//              this in event listener
box.addEventListener("click", function () {
    console.log("normal");
    console.log(this);
})

box.addEventListener("click", (event) => {
    console.log("event target");
    console.log(event);
    console.log(event.target);
})


//another use of this
const list = document.querySelectorAll(".box2 h1,h2,h3");
console.log(list);

function fun() {
    console.log(this.innerText);
    this.classList.toggle("white");
}
for (ele of list) {
    ele.addEventListener("click", fun)
}

// list.forEach(h => {
//     h.addEventListener("click", (event) => {
//         console.log(event.target.innerText);
//         event.target.classList.toggle("white");
//     })
// })