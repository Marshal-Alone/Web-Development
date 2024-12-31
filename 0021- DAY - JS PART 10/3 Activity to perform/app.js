function getRGB() {
    let r = Math.floor(Math.random() * 256);//Random value for red (0-255)
    let g = Math.floor(Math.random() * 256);//green (0-255)
    let b = Math.floor(Math.random() * 256);//blue (0-255)

    return `rgb(${r},${g},${b})`
}

const colorVal = document.querySelector("#color-value");
const box = document.querySelector("#box");
function setColor() {
    let val = getRGB();
    colorVal.innerHTML = val;
    box.style.backgroundColor = val;

    //extra
    if (val == "rgb(255,255,255)") {
        box.style.color = "black";
    } else {
        console.log('not white');
        box.style.color = "white";
    }
}

const btn = document.querySelector("button");
btn.addEventListener("click", setColor);