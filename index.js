const computerLabel = document.getElementById("computer");
const playerLabel = document.getElementById("player");
const winLabel = document.getElementById("win");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
let computerMove;

rockBtn.onclick = function() {
    playerLabel.textContent = "You picked: Rock"
    computerMove = Math.floor(Math.random() * 3);
    if(computerMove == 1) {
        computerLabel.textContent = "Computer picked: Paper"
        winLabel.textContent = "You lose!";
    } else if (computerMove == 0){
        computerLabel.textContent = "Computer picked: Rock"
        winLabel.textContent = "It's a Tie!";
    } else {
        computerLabel.textContent = "Computer picked: Scissors"
        winLabel.textContent = "You Won!"
    }
}

paperBtn.onclick = function() {
    playerLabel.textContent = "You picked: Paper"
    computerMove = Math.floor(Math.random() * 3);
    if(computerMove == 1) {
        computerLabel.textContent = "Computer picked: Paper"
        winLabel.textContent = "It's a Tie!";
    } else if (computerMove == 0){
        computerLabel.textContent = "Computer picked: Rock"
        winLabel.textContent = "You Won!";
    } else {
        computerLabel.textContent = "Computer picked: Scissors"
        winLabel.textContent = "You Lose!"
    }
}

scissorsBtn.onclick = function() {
    playerLabel.textContent = "You picked: Scissors"
    computerMove = Math.floor(Math.random() * 3);
    if(computerMove == 1) {
        computerLabel.textContent = "Computer picked: Paper"
        winLabel.textContent = "You Won!";
    } else if (computerMove == 0){
        computerLabel.textContent = "Computer picked: Rock"
        winLabel.textContent = "You Lose!";
    } else {
        computerLabel.textContent = "Computer picked: Scissors"
        winLabel.textContent = "It's a Tie!"
    }
}