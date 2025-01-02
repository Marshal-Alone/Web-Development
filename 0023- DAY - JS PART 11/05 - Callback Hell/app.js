h1 = document.querySelector("h1");

//changr color
// one();
function one() {
    setTimeout(() => {
        h1.style.color = "red";
    }, 1000);
    setTimeout(() => {
        h1.style.color = "orange";
    }, 2000);
    setTimeout(() => {
        h1.style.color = "green";
    }, 3000);
}

//if we want to do it 10 times we have to write 10 times

//efficient way to do this is
function change_color(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        console.log(color);
        if (nextColorChange) {
            nextColorChange();
        }
    }, delay);
}

//This is callback hell -> nesting of callback
change_color("blue", 1000, () => {
    change_color("green", 1000, () => {
        change_color("red", 1000, () => {
            change_color("yellow", 1000, () => {
                change_color("orange", 1000)
            });
        });
    });
});




