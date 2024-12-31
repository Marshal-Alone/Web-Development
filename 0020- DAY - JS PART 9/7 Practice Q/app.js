//Add the following elements to the container using only JavaScript and the DOM methods.
let container = document.createElement("div");
document.body.append(container);
{

    container.style.backgroundColor = "grey";
    // container.innerHTML = "<u><b>This is container <br><br>";
    container.style.padding = "10px";
    container.style.height = "60vh";
    container.style.width = "70vw";
    container.style.textAlign = "center";
    container.style.fontSize = "20px";

    let body = document.querySelector("body");
    body.style.display = "flex";
    body.style.flexDirection = "column";
    body.style.justifyContent = "center";
    body.style.alignItems = "center";
}





//              Q1
//1-A <p> element with red text that says "Hey I'm red!"
let para1 = document.createElement("p");
para1.innerText = "Hey I'm red !"
// para1.style.color = "red";
para1.classList.add("red");
container.append(para1);




//              Q2
//2- An <h3> element with blue text that says "I'm a blue h3!"
const h3 = document.createElement("h3");
h3.innerHTML = "I am blue h3!!";
h3.classList.add("blue");
container.append(h3);



//              Q3
//3- A <div> with a black border and a pink background, containing:
const div = document.createElement("div");
// div.style.border = "2px solid black";
// div.style.background = "pink";
div.classList.add("black-border","pink-bg")
div.style.minHeight = "50px"
container.append(div)

{
    //   - An <h1> element with the text "I'm in a div"
    const h1 = document.createElement("h1");
    h1.innerHTML = "I'm in a div";
    div.append(h1);


    //   - A <p> element with the text "ME TOO!"
    const para2 = document.createElement("p");
    para2.innerHTML = "ME TOO!!"
    div.append(para2);
}