function getComputerChoice() {
    let choice = "rock";
    let num = Math.trunc((Math.random() * 100)) % 3;
    if (num == 0) {
        choice = "paper";
    } else if (num == 1) {
        choice = "scissors";
    };
    return choice;
};

function getHumanChoice() {
    let choice = prompt ("Make your choice!", "rock");
    return choice
};

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = HumanChoice.toLowerCase();
    
    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            console.log("It's a draw! You both chose rock");
        } else if (computerChoice == "paper") {
            console.log("You lose! Paper beats rock");
        } else if (computerChoice == "scissors") {
            console.log("You win! Rock beats scissors");
        };
    } else if (humanChoice == "paper") {
        if (computerChoice == "paper") {
            console.log("It's a draw! You both chose paper");
        } else if (computerChoice == "scissors") {
            console.log("You lose! Scissors beats paper");
        } else if (computerChoice == "rock") {
            console.log("You win! Paper beats rock");
        };
    } else if (humanChoice == "scissors") {
        if (computerChoice == "scissors") {
            console.log("It's a draw! You both chose scissors");
        } else if (computerChoice == "rock") {
            console,log("You lose! Rock beats scissors");
        } else if (computerChoice == "paper") {
            console,log("You win! Scissors beats paper");
        };
    }
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
