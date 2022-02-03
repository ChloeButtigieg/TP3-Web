"use strict";

let start_game1;
let game_selection;
let start_game2;
let game1;
let game2;
let restart_button1;
let restart_button2;
let try_button;
let computer_number;
let smaller_button;
let bigger_button;
let found_button;
let message2;
let min;
let max;
let current_position;

function init() {
    game_selection = document.getElementById("game-selection");
    start_game1 = document.getElementById("start_game1");
    start_game2 = document.getElementById("start_game2");
    game1 = document.getElementById("game1");
    game2 = document.getElementById("game2");
    restart_button1 = document.getElementById("restart_button1");
    restart_button2 = document.getElementById("restart_button2");
    try_button = document.getElementById("try_button");
    smaller_button = document.getElementById("smaller_button");
    bigger_button = document.getElementById("bigger_button");
    found_button = document.getElementById("found_button");
    message2 = document.getElementById("message2");
    min = 0;
    max = 100;

    new_game();

    try_button.addEventListener("click", try_button_event);
    restart_button1.addEventListener("click", new_game);
    start_game1.addEventListener("click", start_player_guess_game);

    start_game2.addEventListener("click", start_computer_guess_game);
    smaller_button.addEventListener("click", smaller_button_event);
    bigger_button.addEventListener("click", bigger_button_event);
    found_button.addEventListener("click", found_button_event);
    restart_button2.addEventListener("click", new_game);
}

function try_button_event() {
    let player_input = document.getElementById("player_input");
    let message1 = document.getElementById("message1");

    let player_number = parseInt(player_input.value);
    if (player_number < computer_number) {
        message1.innerHTML = "Non, c'est plus grand";
    } else if (player_number > computer_number) {
        message1.innerHTML = "Non, c'est plus petit";
    } else {
        message1.innerHTML = "Bravo, vous avez trouvé";
        show(restart_button1);
    }
    player_input.value = "";
}

function smaller_button_event() {
    max = current_position;
    current_position = Math.round((min + max) / 2);
    message2.innerHTML = "Est-ce que c'est " + current_position + " ?";
}

function bigger_button_event() {
    min = current_position;
    current_position = Math.round((min + max) / 2);
    message2.innerHTML = "Est-ce que c'est " + current_position + " ?";
}

function found_button_event() {
    message2.innerHTML = "";
    hide(smaller_button);
    hide(bigger_button);
    hide(found_button);
    show(restart_button2);
}

function start_player_guess_game() {
    computer_number = Math.round(Math.random() * 99 + 1);
    hide(game_selection);
    show(game1);
    hide(restart_button1);
}

function start_computer_guess_game() {
    current_position = Math.round((min + max) / 2);
    hide(game_selection);
    show(game2);
    hide(restart_button2);
    message2.innerHTML = "Est-ce que c'est " + current_position + " ?";
}

function show(element) {
    element.style.display = "";
}

function hide(element) {
    element.style.display = "none";
}

function new_game() {
    show(game_selection);
    hide(game1);
    hide(game2);
}
