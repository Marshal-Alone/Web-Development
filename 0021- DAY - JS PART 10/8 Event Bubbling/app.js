let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll('li');

div.addEventListener("click", (event) => {

    console.log("Div was clicked");
})
ul.addEventListener("click", (event) => {
    // event.stopPropagation();
    console.log("ul was clicked");
})

for (li of lis) {
    li.addEventListener("click", (event) => {
        // event.stopPropagation();
        console.log('li was clicked');
        //clicking on li -> ul was clicked, div was clicked, li was clicked

        //li triggers its parents also due to nesting 

        //      event bubbling
        // when event listener of andar wala ele is triggered then vo baher wale parent ke events ko bhi trigger karta hai
    })
}

//to stop this we have event.stopPropagation()
// add event.stopPropagation() to element whose event  propogation to parent is needed to be stopped
