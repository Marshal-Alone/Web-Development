let input = document.querySelector("input");;
let para = document.querySelector("p");

input.addEventListener("change", function (e) {
    console.log("change event , value : ", this.value);
})

input.addEventListener('input', function (e) {
    console.log("input event , value :", this.value);
    para.innerText = this.value;
})

