let btn = document.querySelector("button");
console.dir(btn);
//                  onclick -> when ele is clicked
{

    btn.onclick = () => {
        console.log("Button was clicked");
        // alert("Button was clicked !!")
    }

    function say_hi() {
        console.log("Hiiii !!");
    }
    btn.onclick = say_hi;       //dont use ()


    //add on click to all buttons
    let btn_list = document.querySelectorAll('button');
    for (btn of btn_list) {
        // btn.onclick = say_hi;
        btn.onclick = function () {
            console.log(btn.innerHTML);        }
    };
}




//                  onmouseenter -> when mouse enters an ele
{

    let btns = document.querySelectorAll('button');
    btns.forEach(btn => {
        btn.onmouseenter = () => {
            console.log("Mouse entered: ", btn.innerText);
        }
    })


}