//                  parentElement
let h4 = document.querySelector("h4");
console.log(h4.parentElement); //div.box

//              children
let box = document.querySelector(".box");
console.log(box.children); //h4,ul
console.log(box.childElementCount); //2



//previousElementSibling,
let ul = document.querySelector("ul");
console.log(ul);
console.log(ul.children); //li,li,li

let curr_ele = ul.children[1];
console.log(curr_ele.innerText); //First Appearance

//              previous
let prev = curr_ele.previousElementSibling;
console.log(prev.innerText); //Publisher

//              next
let next = curr_ele.nextElementSibling;
console.log(next.innerText); // created by stan lee





//change h1 color
{
    let box = document.querySelector(".box");
    box.previousElementSibling.style.color = "green";
}


{
    //for notes testing
    let b = document.querySelector(".b");
    console.log(b.parentElement);
    console.log(b.previousElementSibling);
    console.log(b.nextElementSibling);

    let div = document.querySelector("div");
    console.log(div.children);
}