const body = document.querySelector("body");

//                  Q1
//Qsl. Create a new input and button element on the page using JavaScript only.
// Set the text of button to "Click me",
{
    const input = document.createElement("input");
    const btn = document.createElement("button")

    btn.innerHTML = "<b>Click me !!";

    body.append(input);
    body.append(btn);

    //extra
    input.placeholder = "Enter your input";  //input.setAttribute('placeholder', 'Enter some');
    input.style.display = "block";  //new ele will appear on next line
    btn.classList.add("margin")     //add margin for spacing
    btn.style.display = "block";  //new ele will appear on next line
}


//                  Q2
// Qs2. Add following attributes to the element
{
    //      -Change placeholder value of input to "username"
    const input = document.createElement("input");
    input.setAttribute("placeholder", "Username");

    //      -Change the id of button to "btn"
    const btn = document.querySelector("button");
    btn.setAttribute("id", "btn");

}




//                  Q3
//Qs3 Access the btn using the querySelector and button id-
//Change the button background color to blue and text color to white-
{

    let btn2 = document.querySelector("#btn");
    btn2.classList.add('blue-bg', 'white');
}


//                  Q4
//Qs4. Create an hl element on the page and set its text to "DOM Practice" underlined.
// Change its color to purple.
{
    const h1 = document.createElement("h1");
    h1.innerHTML = "DOM Practice Assignment";
    h1.classList.add("purple", "underline");
    document.querySelector("#first-h1").insertAdjacentElement("afterend", h1);
}


//                  Q5
{
    const p = document.createElement("p");
    p.innerHTML = "Apna College <b>Delta</b> Practice";
    body.append(p);
}

