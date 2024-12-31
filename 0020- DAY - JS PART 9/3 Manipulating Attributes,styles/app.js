let img = document.querySelector("img");

//          getAttribute
console.log(img.getAttribute("id")); // ->mainImg


//          setAttribute
img.setAttribute("id", "newImg")  // mainImg->newImg
console.log(img.getAttribute("id")); //newImg

//change color of all <a> tags
let a_tags = document.querySelectorAll(".box a");
for (a of a_tags) {
    console.log(a);
    a.style.color = "green";
    a.style.textDecoration = "underline";
    a.style.textDecorationColor = "black";
}

