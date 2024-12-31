let btn = document.querySelector("button");

// btn.addEventListener("click", function (event) {
//     console.log(event.target);
// })

// btn.addEventListener("click", (event) => {
//       console.log(event.target);
// })


function fun(event) {
    console.log(event.target);
}
btn.addEventListener("click", fun)


//              Keyboard event
const input = document.querySelector("input");
input.addEventListener("keypress", (event) => {
    console.log("keypress : ", event.key, event.code);
})
input.addEventListener("keydown", (event) => {
    console.log("keydown : ", event.key, event.code);
})
input.addEventListener("keyup", (event) => {
    console.log("keyup : ", event.key, event.code);
})


//mini game
const character = document.querySelector(".char-container");
const command = document.querySelector("#move");
let currentX = 0;  // Track the current horizontal position
let currentY = 0;  // Track the current horizontal position

function left() {
    let left = character.getBoundingClientRect().left;
    console.log("left = ", left);
    return left;
}
function right() {
    let right = character.getBoundingClientRect().right;
    console.log("right = ", right);
    return right;
}
function tops() {
    let top = character.getBoundingClientRect().top;
    console.log("top = ", top);
    return top;
}
function bottom() {
    let bottom = character.getBoundingClientRect().bottom;
    console.log("bottom = ", bottom);
    return bottom;
}
function resetPosition() {
    // Reset character to the starting position (top-left corner of the container)
    character.style.transform = 'translate(0, 0)';
    currentX = 0;
    currentY = 0;
}

command.addEventListener("keydown", (event) => {
    let parent_bound = document.querySelector(".game-arena").getBoundingClientRect();
    let char_bound = character.getBoundingClientRect();
    console.log(char_bound, parent_bound);
    if (
        char_bound.left < parent_bound.left ||
        char_bound.top < parent_bound.top ||
        char_bound.right > parent_bound.right ||
        char_bound.bottom > parent_bound.bottom
    ) {
        resetPosition();
    } else {
        let cmd = event.code;
        character.style.transform = `translateY(${currentX}px)`
        character.style.transform = `translateX(${currentY}px)`
        switch (cmd) {
            case 'ArrowUp':
                currentX -= 80; // Move up by reducing Y
                character.style.transform = `translateY(${currentX}px) translateX(${currentY}px)`;
                break;
            case 'ArrowDown':
                currentX += 80; // Move down by increasing Y
                character.style.transform = `translateY(${currentX}px) translateX(${currentY}px)`;
                break;
            case 'ArrowLeft':
                currentY -= 80; // Move left by decreasing X
                character.style.transform = `translateY(${currentX}px) translateX(${currentY}px)`;
                break;
            case 'ArrowRight':
                currentY += 80; // Move right by increasing X
                character.style.transform = `translateY(${currentX}px) translateX(${currentY}px)`;
                break;

            default:
                command.setAttribute("placeholder", "")
                break;
        }
    }

})





