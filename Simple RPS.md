# Javascript-Basics- ROCK PAPER SCISSOR (WITHOUT UI)

Assignment  (https://www.theodinproject.com/courses/web-development-101/lessons/rock-paper-scissors)

Brief :

1. Start a new git repo for your project

2.Create a blank HTML document with a script tag. This game is going to be played completely from the console, so don’t worry about putting anything else in there.

3. Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play.

4. Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

4.1 make your function case insensitive (so users can input rock, ROCK, RocK or any other variation)

4.2 Important note: you want to return the results of this function call, not console.log() them. To test this function console.log the results:
    
    function playRound(playerSelection, computerSelection) {
	// your code here!
}

const playerSelection = 'rock'
const computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))

5. Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
     
    5.1 You have not officially learned how to “loop” over code to repeat function calls… if you already know about loops from somewhere else (or if you feel like doing some more learning) feel free to use them. If not, don’t worry! Just call your playRound function 5 times in a row. Loops are covered in the next lesson.


    5.2 At this point you should be using console.log() to display the results of each round and the winner at the end.
    
    5.3 Use prompt() to get input from the user. Read the docs here if you need to https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt
    
    5.4 Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.

    5.5 Feel free to create more “helper” functions if you think it would be useful.







