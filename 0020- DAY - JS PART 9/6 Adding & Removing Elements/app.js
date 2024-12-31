//              Add element
let newp1 = document.createElement("p");
let newp2 = document.createElement("p");
let newp3 = document.createElement("p");
let newp4 = document.createElement("p");

//Adding para
newp1.innerHTML = "<u><b>This is append";
newp2.innerHTML = "<u><b>This is prepend";
newp3.innerHTML = "<u><b>This is appendchild";
newp4.innerHTML = "<u><b>This is appendchild";

// let box = document.querySelector(".box");

// box.append(newp1);
// box.prepend(newp2);
// box.appendChild(newp3);


// //Adding button
// let btn = document.createElement("button");
// btn.textContent = "\n      Click me !! (append)";
// box.appendChild(btn);


let h4 = document.querySelector("h4");
h4.append(newp1);
h4.append(newp1, "This is text apppended");



h4.appendChild(newp3, newp2, newp1);
// h4.appendChild("This is text sppended"); ->error


h4.prepend(newp2, "Prepend Text");
h4.prepend("Prepend Text", newp2);
h4.prepend("Prepend Text        ");






let newh4 = document.querySelector(".div2 h4");
let btn = document.createElement("button")
let btn2 = document.createElement("button")
let btn3 = document.createElement("button")
let btn4 = document.createElement("button")

btn.innerHTML = "beforebegin";
btn2.innerHTML = "afterbegin";
btn3.innerHTML = "beforeend";
btn4.innerHTML = "afterend";



newh4.insertAdjacentElement('beforebegin', btn);
console.log("1");
newh4.insertAdjacentElement('afterbegin', btn2);
console.log("2");
newh4.insertAdjacentElement('beforeend', btn3);
console.log("3");
newh4.insertAdjacentElement('afterend', btn4);
console.log("4");

