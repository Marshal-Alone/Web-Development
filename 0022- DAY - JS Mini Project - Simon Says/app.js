//                      Start the game

let highscore = 0;
let highscore_text = document.querySelector(".highscore");

let is_game_started = false;
// Event listener to start the game
document.addEventListener("keypress", function (event) {
    if (!is_game_started) {  //if game not started -> start game
        is_game_started = true;
        console.log("Game Start");

        //Go to next level
        setTimeout(lvl_up, 500)

        //add event listner to button when when game is started
        add_event_to_buttons();
    }
})



//                      Flash button + level up

let level = 0;
let lvl_text = document.querySelector("#lvl");

//get all button
let pink = document.querySelector(".pink");
let orange = document.querySelector(".orange");
let teal = document.querySelector(".teal");
let aqua = document.querySelector(".aqua");

// Function to get a random button color and add it to the game sequence
function random_color_button() {
    //generate random color button
    let randomIdx = Math.floor(Math.random() * 4);
    let btns = ["pink", "orange", "teal", "aqua"];
    let random_color = btns[randomIdx];
    let random_color_btn = document.querySelector(`.${random_color}`);

    //add random color to game sequence
    let game_color = random_color;
    game_sequence.push(game_color);
    console.log("Game sequence -> ", game_sequence);

    return random_color_btn;
}

//function to flash a button
function game_flash(btn) {
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash")
    }, 350);

    //log curr flash btn
    // console.log(`Level ${level} : current flashed btn -> ${btn.classList[1]}`);
}

//level up function
function lvl_up() {
    level++;
    lvl_text.innerText = `Level ${level}`;

    //flash button
    let random_color_btn = random_color_button();
    game_flash(random_color_btn);


    //reset user seq so user have to enter from starting
    user_sequence = [];

}



//                      when user click btn -> check user-sequence == game-sequence

let user_sequence = [];
let game_sequence = [];

//Function to flash button clicked by user
function user_game_flash(btn) {
    btn.classList.add("user-flash");
    setTimeout(() => {
        btn.classList.remove("user-flash")
    }, 400);

    //log curr flash btn
    // console.log(`Level ${level} : user flashed btn -> ${btn.classList[1]}`);
}


//functon to handle button click
function btn_click() {
    let btn = this;
    user_game_flash(btn);
    // console.log(btn.classList[1], ": was cliked");

    // when user click on btn, add color to user sequence
    let user_color = this.id;
    user_sequence.push(user_color)
    console.log("User sequence -> ", user_sequence);

    //call check sequence
    // check_sequence(user_sequence.length - 1);   //by mam
    check_sequence(); // by me + chatgpt
}

//add eventlistner to all button -> add only when game is started
function add_event_to_buttons() {
    let btn_list = document.querySelectorAll(".btn");
    for (btn of btn_list) {
        btn.addEventListener("click", btn_click);
    }

}






//                      if sequence same -> level up
//                      if sequence wrong -> Game Over

// add check_sequence function
// Function to check the user's sequence against the game sequence
function check_sequence(idx) {
    if (user_sequence[idx] == game_sequence[idx]) {
        if (user_sequence.length == game_sequence.length) {
            setTimeout(lvl_up, 1000);
            console.log(`Current Level ---> ${level}`);
            // console.log('-----------LEVEL UP ++ -------------');
        }
    } else {
        // console.log("-------GAME OVER ________");
        highscore = level;

        red_flash();
        lvl_text.innerHTML = `GAME OVER ! <br><br>Your score was <b> ${level}</b> <br><br>Press any key to restart`;
        reset();
    }
}

// Function to check the user's sequence against the game sequence - by myself+chatgpt not mam
function check_sequence() {
    let index = user_sequence.length - 1;
    const last_user_color = user_sequence[index];
    console.log("index=", index);
    console.log("Last user color =", last_user_color);
    const current_game_color = game_sequence[index];
    console.log("Curr game color =", current_game_color);

    if (last_user_color == current_game_color) {
        if (user_sequence.length === game_sequence.length) {
            setTimeout(lvl_up, 500);  // Wait a bit before moving to the next level
            console.log(`Current Level ---> ${level}`);
        }
    } else {
        // Update highscore if the current level is higher
        if (level > highscore) {
            highscore = level;
        }
        red_flash();  // Flash red to show the error
        lvl_text.innerHTML = `GAME OVER ! <br><br>Your score was <b> ${level}</b> <br><br>Press any key to restart`;
        reset();  // Reset the game

    }


}

//flash screen red for wrong ans
function red_flash() {
    document.body.classList.add("red");
    setTimeout(() => {
        document.body.classList.remove("red");
    }, 300)
}



//create game reset function
function reset() {
    highscore_text.innerText = `Highscore : ${highscore}`;
    highscore_text.style.display = "block"
    is_game_started = false;
    game_sequence = [];
    user_sequence = [];
    level = 0;
    remove_event_to_buttons();


}

//remove event listner when game is over to prevent unnecessary clicks
function remove_event_to_buttons() {
    let btn_list = document.querySelectorAll(".btn");
    for (btn of btn_list) {
        btn.removeEventListener("click", btn_click);
    }

}