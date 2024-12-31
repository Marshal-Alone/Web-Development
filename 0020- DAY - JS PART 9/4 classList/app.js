let h1 = document.querySelector("h1");

//              return list of classes
console.log(h1.classList); //first


//              add new class
h1.classList.add("green", "underline")
console.log(h1.classList); //first, second, green,underline

{
    // h1.classList.add("second-class");
    // h1.classList.add("green"); //add green color
    // h1.classList.add("underline"); //add underline
}


//              remove class
h1.classList.remove("green", "underline", "second-class")
console.log(h1.classList)
{
    // h1.classList.remove("green") //remove green color
    // h1.classList.remove("underline") //remove underline
}



//              conntains
console.log(h1.classList.contains("first")); //true
console.log(h1.classList.contains("green")); //false

//               toggle
h1.classList.toggle("green"); //first,green , true
h1.classList.toggle("green"); //first       , false




//               change box bg yo yellow
let box = document.querySelector(".box");
box.classList.toggle("yellow-bg")