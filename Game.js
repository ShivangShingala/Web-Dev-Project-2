function gameStart(){

var userScore = 0;
var computerScore = 0;
const nameOfPlayer = prompt("What is your name?");
if(nameOfPlayer != null){
    alert("Welcome " + nameOfPlayer + ". \nLet's begin the game!");
}
else{
alert("You decided not to enter a name. Want to try again?");
gameStart();
}


newGame = function(){
    var input = prompt("Enter numerical input here. \n For example: \n 1 for Rock,\n 2 for Paper,\n 3 for Scissor.")

    if(input > 3){
        alert("Invalid input");
        var input = prompt("Enter numerical input here. \n For example: \n 1 for Rock,\n 2 for Paper,\n 3 for Scissor.")
    }
    if(input == null){
        alert("You chose not to enter a number! Want to try again?");
        var input = prompt("Enter numerical input here. \n For example: \n 1 for Rock,\n 2 for Paper,\n 3 for Scissor.")
        
    }

    if(input == 1){
        var input = "ROCK";
    }
    else if(input == 2){
        var input = "PAPER";
    }
    else{
        var input = "SCISSORS";
    }

    var computerChoice = Math.random();
        if (computerChoice < 0.34) {
            computerChoice = "ROCK";
        } else if(computerChoice <= 0.67) {
            computerChoice = "PAPER";
        } else {
            computerChoice = "SCISSORS";
        }

    alert("The computer chose:  " + computerChoice );  

    var compare = function() {
    

        if (input === computerChoice) {
            return "It's a tie!";
        }
        if (input === "ROCK") {
            if (computerChoice === "SCISSORS") {
                userScore++;
                return "You win!";
      
            } else {
              computerScore++;
                return "Computer wins.";
            }
            
        }
        if (input === "PAPER") {
            if (computerChoice === "ROCK") {
                userScore++;
                return "You win!";
            } else {
               computerScore++;
                return "Computer wins.";
            }
        }
        if (input === "SCISSORS") {
            if (computerChoice === "ROCK") {
             computerScore++;
                return "Computer wins.";
            } else {
                userScore++;
                return "You win!";
            }
        }
    }
    alert("You chose: " + input + " \nThe Computer chose: " + computerChoice + ". \n" +compare());  
    alert(nameOfPlayer + "'s score is: " + userScore + "\nComputer's score is: " + computerScore); 

 var playAgain = confirm("Do you want to play again?");
    if (playAgain != false){
    newGame();
    }
    else{
        if(userScore > computerScore)
        document.write("Final Score: " + nameOfPlayer + "'s score : " + userScore + ", Computer's score: " + computerScore + ". " + nameOfPlayer + " wins!");
        else{
        document.write("Final Score: " + nameOfPlayer + "'s score : " + userScore + ", x    Computer's score: " + computerScore + ". Computer wins!");
        }
    }
}
newGame();
}
