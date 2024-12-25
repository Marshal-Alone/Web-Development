//GUESS MOVIE
// Guess_Movie();
function Guess_Movie() {
    let favMov = "iron man";

    let userGuess = prompt("Guess the movie (Enter 'quit' to exit)").toLowerCase();

    while ((userGuess != favMov) && (userGuess != "quit")) {
        if (userGuess == 'quit') {
            alert("BYEEEEEE loooser!!");
        }
        userGuess = prompt("Try again kiddo (Enter 'quit' to exit)").toLowerCase();
    }
    if (userGuess === favMov) {
        alert("You are genius !!");
    }
}





//LOOPS WITH ARRAY
//loop_with_arr()
function loop_with_arr() {
    let fruits = [1, 2, 3, 4, 5];

    for (let i = 0; i < fruits.length; i++) {
        console.log(i, fruits[i]);
    }

    BACKWARD
    for (let i = fruits.length - 1; i >= 0; i--) {
        console.log(i, fruits[i]);

    }
}



// NESTED LOOPS
// Nested_Loop();
// std_data()
function Nested_Loop() {
    let heroes = [
        ["iron man", "spider man", "thor"],
        ["super man", "bat man", "flash"]
    ];

    for (let i = 0; i < heroes.length; i++) {
        console.log(`List : ${i}`);

        for (let j = 0; j < heroes[i].length; j++) {
            console.log(heroes[i][j]);
        }
    }
}

function std_data() {
    let student = [
        ["aman", 90], ["shraddha", 95], ["marshal", 98], ["vaishnavi", 100]
    ];

    console.log(student);


    for (let i = 0; i < student.length; i++) {
        console.log("");
        console.log(`${student[i][0]} : ${student[i][1]}`);
        for (let j = 0; j < student[i].length; j++) {
            console.log(`${student[i][j]}`);

        }
    }
}





//FOR OF LOOP
// for_of();
// for_of_nested();
function for_of() {
    let nums = [1, 2, 3, 4, 5];
    for (num of nums) {
        console.log(num,nums.indexOf(num));
    }

    for (char of "Marshal") {
        console.log(char,"Marshal".indexOf(char));
    }


}

function for_of_nested() {
    let heroes = [
        ["iron man", "spider man", "thor"],
        ["super man", "bat man", "flash"]
    ];

    for (list of heroes) {
        console.log(list);
        for (hero of list) {
            console.log(hero);
        }
    }
}