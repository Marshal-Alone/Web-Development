//Selecting elements by id - getElementById
{
    let id = document.getElementById("description");
    console.dir(id);
}


//Selecting elements by class - getElementByClassName
{
    let smallImg = document.getElementsByClassName("oldImg");

    for (img of smallImg) {
        // img.src = "assets/spiderman_img.png";
        console.log(`value of ${img} is changes`);
    }
}


//Selecting Elements by tagname -
let tag = document.getElementsByTagName("p");
console.dir(tag);


//Query Selector
{
    console.dir(document.querySelector("h1"))

    console.dir(document.querySelector("#description"))

    console.dir(document.querySelector(".oldImg"))

    //SELECT ALL
    // console.dir(document.querySelectorAll("ul li").forEach(li => console.log(li.innerText)))

    console.dir(document.querySelectorAll('a'))
}