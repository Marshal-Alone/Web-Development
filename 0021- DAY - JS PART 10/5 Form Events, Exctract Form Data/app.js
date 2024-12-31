let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     console.log("Form submitted");
//     event.preventDefault(); //prevent default behavior

//     // let username = document.querySelector("#username");
//     let username = this.elements[0];

//     // let pass = document.querySelector("#pass");
//     let pass = this.elements[1];
//     console.log("username :", username.value);
//     console.log("password", pass.value);

//     // alert(`HI ${username.value}, your pass is ${pass.value}`)


//     console.dir(form)
//     //direct way to  access elements inside form rather than using selectors
//     console.log(form.elements);
//     console.log(form.elements[0]);
//     console.log(form.elements[1]);
//     console.log(form.elements[2]);
// })

//using arrow function      -> this replace with event.target
{
    form.addEventListener("submit", (event) => {
        console.log("Form submitted");
        event.preventDefault(); //prevent default behavior

        // let username = document.querySelector("#username");
        let username = event.target.elements[0];

        // let pass = document.querySelector("#pass");
        let pass = event.target.elements[1];
        console.log("username :", username.value);
        console.log("password", pass.value);

        // alert(`HI ${username.value}, your pass is ${pass.value}`)


        console.dir(form)
        //direct way to  access elements inside form rather than using selectors
        console.log(form.elements);
        console.log(form.elements[0]);
        console.log(form.elements[1]);
        console.log(form.elements[2]);
    })

}