// Variavbles
let diceStop= document.querySelectorAll(".bx");
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let player3 = document.getElementById("player3");
let player4 = document.getElementById("player4");
var dice_p1 = document.getElementById("p1_roll");
var dice_p2 = document.getElementById("p2_roll");
var dice_p3 = document.getElementById("p3_roll");
var dice_p4 = document.getElementById("p4_roll");
// console.log(dice_p1, dice_p2, dice_p3, dice_p4);

//box colouring
box_array = document.getElementsByClassName("box");

// Logics

// ====Dice roll ====
// Player 1 move
dice_p1.addEventListener("click", function() {
    if(rollDice()==1){
        p1_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
        p1_roll.classList.add("bxs-dice-1");
    }
    else if(rollDice()==2){
        p1_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
        p1_roll.classList.add("bxs-dice-2");
    }
    else if(rollDice()==3){
        p1_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
        p1_roll.classList.add("bxs-dice-3");
    }
    else if(rollDice()==4){
        p1_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
        p1_roll.classList.add("bxs-dice-4");
    }
    else if(rollDice()==5){
        p1_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
        p1_roll.classList.add("bxs-dice-5");
    }
    else if(rollDice()==6){
        p1_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
        p1_roll.classList.add("bxs-dice-6");
    }
});
// Player 2 move
dice_p2.addEventListener("click", function() {

    if(rollDice()==1){
        p2_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
        p2_roll.classList.add("bxs-dice-1");
    }
    else if(rollDice()==2){
        p2_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
        p2_roll.classList.add("bxs-dice-2");
    }
    else if(rollDice()==3){
        p2_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
        p2_roll.classList.add("bxs-dice-3");
    }
    else if(rollDice()==4){
        p2_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
        p2_roll.classList.add("bxs-dice-4");
    }
    else if(rollDice()==5){
        p2_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
        p2_roll.classList.add("bxs-dice-5");
    }
    else if(rollDice()==6){
        p2_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
        p2_roll.classList.add("bxs-dice-6");
    }
});
// Player 3 move
dice_p3.addEventListener("click", function() {

    if(rollDice()==1){
        p3_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
        p3_roll.classList.add("bxs-dice-1");
    }
    else if(rollDice()==2){
        p3_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
        p3_roll.classList.add("bxs-dice-2");
    }
    else if(rollDice()==3){
        p3_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
        p3_roll.classList.add("bxs-dice-3");
    }
    else if(rollDice()==4){
        p3_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
        p3_roll.classList.add("bxs-dice-4");
    }
    else if(rollDice()==5){
        p3_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
        p3_roll.classList.add("bxs-dice-5");
    }
    else if(rollDice()==6){
        p3_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
        p3_roll.classList.add("bxs-dice-6");
    }
});
// Player 4 move
dice_p4.addEventListener("click", function() {
    if(rollDice()==1){
        p4_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
        p4_roll.classList.add("bxs-dice-1");
    }
    else if(rollDice()==2){
        p4_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
        p4_roll.classList.add("bxs-dice-2");
    }
    else if(rollDice()==3){
        p4_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
        p4_roll.classList.add("bxs-dice-3");
    }
    else if(rollDice()==4){
        p4_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
        p4_roll.classList.add("bxs-dice-4");
    }
    else if(rollDice()==5){
        p4_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
        p4_roll.classList.add("bxs-dice-5");
    }
    else if(rollDice()==6){
        p4_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
        p4_roll.classList.add("bxs-dice-6");
    }
});






// Funtions

function rollDice() {
    var dice = Math.floor(Math.random() * 6) + 1;
    return dice;
}