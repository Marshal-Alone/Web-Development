const max = prompt("Enter max number");
console.log("Max num =", max);

let randNum = Math.floor(Math.random() * max) + 1;
console.log("Random NUm =", randNum);

userGuess = prompt("Try guessing the number");

let hint;
while (userGuess != randNum) {
    if (userGuess == "quit") {
        console.log("BYEEEEEEEEEEE ...");
        break;
    }
    if (userGuess < randNum) {
        hint = "Bada socho"
    }
    else if (userGuess > randNum) {
        hint = "Jyada udo mat";
    }
    console.log("User Guess =", userGuess);
    userGuess = prompt(hint+" ,TRY AGAIN !!");
}
alert("Correct Guess !!!!!!!!!")