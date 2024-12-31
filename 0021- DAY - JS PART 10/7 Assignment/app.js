//Add horizontal line on page
function add_line_break() {
    let line = document.createElement("span");
    line.style.display = "block";
    line.style.width = "100vw";
    line.style.border = "1px solid black";
    line.style.marginTop = "10px";
    line.style.marginBottom = "10px";
    document.body.append(line);
}
add_line_break();

//                  Q1
// Qsl. Try out the following events in Event Listener on your own :
// - mouseout
// -keypress
// - Scroll
// - load
{
    //                  mouseout
    let box = document.querySelector("#box");
    box.addEventListener("mouseout", () => {
        console.log("Mouse out");
    })
    box.addEventListener("mouseenter", () => {
        console.log("Mouse in");
    })

    //                  keypress
    document.body.addEventListener("keypress", function (e) {
        console.log(e, ":  was presses");
    })

    //                  scroll
    let div = document.querySelector("#scroll");
    div.addEventListener("scroll", () => {
        console.log("You are scrolling");
    })

    //load
    window.addEventListener("load", () => {
        console.log("This page has fully loaded");
    })

}



//                  Q2
//Qs2. Create a button on the page using JavaScript. 
// Add an event listener to the button that changes the button's color to green when it is clicked.
let btn = document.createElement("button");
btn.innerText = "Change my color !! ";
document.body.append(btn);

btn.addEventListener("click", function () {
    this.style.backgroundColor = "green";
    this.style.color = "white";
})


add_line_break();




//                  Q3
//Qs3. Create an input element on the page with a placeholder "enter your name" and an H2 heading on the page inside HTML.
{
    let input = document.createElement("input");
    input.setAttribute("placeholder", "Enter yout name");

    let h2 = document.createElement("h2");

    document.body.append(h2);
    document.body.append(input);


    //The purpose of this input element is to enter a user's name so it should only input letters from a-z, A-Z and space (all other characters should not be detected).
    {
        input.setAttribute("pattern", "[A-Za-z ]+"); //only works during form submission, cant use here

        const not_alphabets = /[^a-zA-Z ]/g; //// Regular expression for letters (a-z, A-Z) and space
        input.addEventListener("input", function (e) {
            console.log(this.value);
            this.value = this.value.replace(not_alphabets, '')


            //tu allow num only
            // this.value = this.value.replace(not_nums, '');
        })

        {
            //           \d: Matches any digit(equivalent to[0 - 9]).
            //           \D: Matches any non - digit(equivalent to[^ 0 - 9]).
            //           \w: Matches any word character(alphanumeric + underscore: [a - zA - Z0 -9_]).
            //           \W: Matches any non - word character(equivalent to[^ a - zA - Z0 -9_]).
            //           \s: Matches any whitespace character(spaces, tabs, line breaks).
            //           \S: Matches any non - whitespace character.
        }

    }

    //Whenever the user inputs their name, their input should be dynamically visible inside the heading.
    //[Please note that no other character apart from the allowed characters should be
    //visible in the heading]
    {

        let is_not_alphabets = /[^a-zA-Z ]/;
        input.addEventListener("input", function () {
            if (!is_not_alphabets.test(this.value)) {
                h2.innerText = this.value;
            } else {
                console.log("not alphabet");
                this.value = this.value.replace(is_not_alphabets, '');
            }
        })
    }



}
