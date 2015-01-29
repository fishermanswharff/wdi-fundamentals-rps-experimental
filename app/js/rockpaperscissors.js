////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // If a move is given, your expression should evaluate to that move.
    // If move is not specified / is null, your expression should run getInput()
    return /* Your Expression */;
}

function getComputerMove(move) {
    // If a move is given, your expression should evaluate to that move.
    // If move is not specified / is null, your expression should run randomPlay()
    return /* Your Expression */;
}

function getWinner(playerMove,computerMove) {
    // This function should either give us back 'player', 'computer', or 'tie'.
    // The rules of the game are that rock beats scissors, scissors beats paper, and paper beats rock.
    // Assume that the only possible input values we can get are 'rock', 'paper', and 'scissors'.

}

function playToFive() {
    console.log("Let's play Rock Paper Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // This function should continue to play Rock Paper Scissors until either the player or the computer has won five times.

    // After each 'round', display some text in the console indicating who played what, who won, and what the current scoreboard looks like.
    // For example,
    //  console.log("Player chose " + playerMove + " while Computer chose " + computerMove);
    //  console.log("The score is currently " + playerWins + " to " + computerWins + "\n");
    return [playerWins, computerWins];
}

