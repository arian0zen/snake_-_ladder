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
let box_array = document.querySelectorAll(".box");
// console.log(box_array)

// Logics

// ====Dice roll ====

var turn = 1;

// Player 1 move
dice_p1.addEventListener("click", function(){
    if(turn == 1){
        player1Move();
        turn = 2;
        console.log("Player 1 rolled dice");
    }
});
// Player 2 move
dice_p2.addEventListener("click", function(){
    if(turn == 2){
        player2Move();
        turn = 3;
        console.log("Player 2 rolled dice");
    }
});
// Player 3 move
dice_p3.addEventListener("click", function(){
    if(turn == 3){
        player3Move();
        turn = 4;
        console.log("Player 3 rolled dice");
    }
});
// Player 4 move
dice_p4.addEventListener("click", function(){
    if(turn == 4){
        player4Move();
        turn = 1;
        console.log("Player 4 rolled dice");
    }
});


// Funtions

function rollDice() {
    var dice = Math.floor(Math.random() * 6) + 1;
    return dice;
}
function player1Move(){
        if(rollDice()==1){
            p1_roll.classList.add("bx-tada");
            setTimeout(() => {
                p1_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
                p1_roll.classList.add("bxs-dice-1");
                p1_roll.classList.remove("bx-tada");
            }, 1000);
        }
        else if(rollDice()==2){
            p1_roll.classList.add("bx-tada");
            setTimeout(() => {
                p1_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
                p1_roll.classList.add("bxs-dice-2");
                p1_roll.classList.remove("bx-tada");
            }, 1000);
        }
        else if(rollDice()==3){
            p1_roll.classList.add("bx-tada");
            setTimeout(() => {
                p1_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
                p1_roll.classList.add("bxs-dice-3");
                p1_roll.classList.remove("bx-tada");
            }, 1000);
        }
        else if(rollDice()==4){
            p1_roll.classList.add("bx-tada");
            setTimeout(() => {
                p1_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
                p1_roll.classList.add("bxs-dice-4");
                p1_roll.classList.remove("bx-tada");
            }, 1000);
        }
        else if(rollDice()==5){
            p1_roll.classList.add("bx-tada");
            setTimeout(() => {
                p1_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
                p1_roll.classList.add("bxs-dice-5");
                p1_roll.classList.remove("bx-tada");
            }, 1000);
        }
        else if(rollDice()==6){
            p1_roll.classList.add("bx-tada");
            setTimeout(() => {
                p1_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
                p1_roll.classList.add("bxs-dice-6");
                p1_roll.classList.remove("bx-tada");
            }, 1000);
        }
}
function player2Move(){
        if(rollDice()==1){
            p2_roll.classList.add("bx-tada");
            setTimeout(() => {
                p2_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
                p2_roll.classList.add("bxs-dice-1");
                p2_roll.classList.remove("bx-tada");
            }, 1000);
        }
        else if(rollDice()==2){
            p2_roll.classList.add("bx-tada");
            setTimeout(() => {
                p2_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
                p2_roll.classList.add("bxs-dice-2");
                p2_roll.classList.remove("bx-tada");
            }, 1000);
        }
        else if(rollDice()==3){
            p2_roll.classList.add("bx-tada");
            setTimeout(() => {
                p2_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
                p2_roll.classList.add("bxs-dice-3");
                p2_roll.classList.remove("bx-tada");
            }, 1000);
        }
        else if(rollDice()==4){
            p2_roll.classList.add("bx-tada");
            setTimeout(() => {
                p2_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
                p2_roll.classList.add("bxs-dice-4");
                p2_roll.classList.remove("bx-tada");
            }, 1000);
        }
        else if(rollDice()==5){
            p2_roll.classList.add("bx-tada");
            setTimeout(() => {
                p2_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
                p2_roll.classList.add("bxs-dice-5");
                p2_roll.classList.remove("bx-tada");
            }, 1000);
        }
        else if(rollDice()==6){
            p2_roll.classList.add("bx-tada");
            setTimeout(() => {
                p2_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
                p2_roll.classList.add("bxs-dice-6");
                p2_roll.classList.remove("bx-tada");
            }, 1000);
        }
}
function player3Move(){

        if(rollDice()==1){
            p3_roll.classList.add("bx-tada");
            setTimeout(() => {
                p3_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
                p3_roll.classList.add("bxs-dice-1");
                p3_roll.classList.remove("bx-tada");
            }, 1000);
        }
        else if(rollDice()==2){
            p3_roll.classList.add("bx-tada");
            setTimeout(() => {
                p3_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
                p3_roll.classList.add("bxs-dice-2");
                p3_roll.classList.remove("bx-tada");
            }, 1000);
        }
        else if(rollDice()==3){
            p3_roll.classList.add("bx-tada");
            setTimeout(() => {
                p3_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
                p3_roll.classList.add("bxs-dice-3");
                p3_roll.classList.remove("bx-tada");
            }, 1000);
        }
        else if(rollDice()==4){
            p3_roll.classList.add("bx-tada");
            setTimeout(() => {
                p3_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
                p3_roll.classList.add("bxs-dice-4");
                p3_roll.classList.remove("bx-tada");
            }, 1000);
        }
        else if(rollDice()==5){
            p3_roll.classList.add("bx-tada");
            setTimeout(() => {
                p3_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
                p3_roll.classList.add("bxs-dice-5");
                p3_roll.classList.remove("bx-tada");
            }, 1000);
        }
        else if(rollDice()==6){
            p3_roll.classList.add("bx-tada");
            setTimeout(() => {
                p3_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
                p3_roll.classList.add("bxs-dice-6");
                p3_roll.classList.remove("bx-tada");
            }, 1000);
        }
}
function player4Move(){
        if(rollDice()==1){
            p4_roll.classList.add("bx-tada");
            setTimeout(() => {
                p4_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
                p4_roll.classList.add("bxs-dice-1");
                p4_roll.classList.remove("bx-tada");
            }, 1000);
        }
        else if(rollDice()==2){
            p4_roll.classList.add("bx-tada");
            setTimeout(() => {
                p4_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
                p4_roll.classList.add("bxs-dice-2");
                p4_roll.classList.remove("bx-tada");
            }, 1000);
        }
        else if(rollDice()==3){
            p4_roll.classList.add("bx-tada");
            setTimeout(() => {
                p4_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
                p4_roll.classList.add("bxs-dice-3");
                p4_roll.classList.remove("bx-tada");
            }, 1000);
        }
        else if(rollDice()==4){
            p4_roll.classList.add("bx-tada");
            setTimeout(() => {
                p4_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
                p4_roll.classList.add("bxs-dice-4");
                p4_roll.classList.remove("bx-tada");
            }, 1000);
        }
        else if(rollDice()==5){
            p4_roll.classList.add("bx-tada");
            setTimeout(() => {
                p4_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
                p4_roll.classList.add("bxs-dice-5");
                p4_roll.classList.remove("bx-tada");
            }, 1000);
        }
        else if(rollDice()==6){
            p4_roll.classList.add("bx-tada");
            setTimeout(() => {
                p4_roll.classList.remove("bxs-dice-1", "bxs-dice-2", "bxs-dice-3", "bxs-dice-4", "bxs-dice-5", "bxs-dice-6");
                p4_roll.classList.add("bxs-dice-6");
                p4_roll.classList.remove("bx-tada");
            }, 1000);
        }
}    