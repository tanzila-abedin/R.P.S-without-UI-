let userScore = 0;
let computerScore = 0;
let userChoice;
let playerSelection;
let computerSelection;


function convertToUpperCase(userChoice){
    let convertedUserChoice = userChoice.toUpperCase();
    return convertedUserChoice;
}

function computerPlay() {
    const choices = ['ROCK', 'PAPER', 'SCISSOR'];
    const randomComputerChoice = Math.floor(Math.random() * 3);
    return choices[randomComputerChoice]; 
}

function win(playerSelection,computerSelection){
    userScore++;
    alert (`Horray! ${playerSelection} beats ${computerSelection}.`);
}

function loose(playerSelection,computerSelection){
    computerScore++;
    alert (`Alas! ${computerSelection} beats ${playerSelection}.`);
}

function draw(){
    alert ("It's a DRAW!!");
}


function game (playerSelection,computerSelection){
    userChoice = prompt ('Wanna play? \n \n  Choose between Rock,Paper OR Scissor!');
    playerSelection = convertToUpperCase(userChoice);
    computerSelection = computerPlay(); 

switch(playerSelection+computerSelection){
    case "ROCKSCISSOR":
    case "PAPERROCK":
    case "SCISSORPAPER":
        win (playerSelection,computerSelection);
        console.log(`USER => ${userScore}`);
        console.log (`COMP => ${computerScore}`);
        console.log("USER WINS.");
    break;

    case "ROCKPAPER":
    case "PAPERSCISSOR":
    case "SCISSORROCK":
        loose (playerSelection,computerSelection);
        console.log(`USER => ${userScore}`);
        console.log (`COMP => ${computerScore}`);
        console.log ("COMPUTER WINS.");
    break;

    case "ROCKROCK":
    case "PAPERPAPER":
    case "SCISSORSCISSOR":
        draw (playerSelection,computerSelection);
        console.log ("ITS A DRAW!")
    break;    
    
    default:
        alert("Go Ahead, pick something!!")
    
    }
}

game(playerSelection,computerSelection);

game(playerSelection,computerSelection);

game(playerSelection,computerSelection);

game(playerSelection,computerSelection);

game(playerSelection,computerSelection);








