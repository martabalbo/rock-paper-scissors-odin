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

function displayScore() {
    console.log("Your score: " + humanScore);
    console.log("Your opponent score: " + computerScore);
};

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    
    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            console.log("It's a draw! You both chose rock");
        } else if (computerChoice == "paper") {
            console.log("You lose! Paper beats rock");
            computerScore += 1;
        } else if (computerChoice == "scissors") {
            console.log("You win! Rock beats scissors");
            humanScore += 1;
        };
    } else if (humanChoice == "paper") {
        if (computerChoice == "paper") {
            console.log("It's a draw! You both chose paper");
        } else if (computerChoice == "scissors") {
            console.log("You lose! Scissors beats paper");
            computerScore += 1;
        } else if (computerChoice == "rock") {
            console.log("You win! Paper beats rock");
            humanScore += 1;
        };
    } else if (humanChoice == "scissors") {
        if (computerChoice == "scissors") {
            console.log("It's a draw! You both chose scissors");
        } else if (computerChoice == "rock") {
            console,log("You lose! Rock beats scissors");
            computerScore += 1;
        } else if (computerChoice == "paper") {
            console,log("You win! Scissors beats paper");
            humanScore += 1;
        };
    }
    displayScore();
};


function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    };

    if (humanScore == computerScore) {
        console.log("It's a draw!");
    } else if (humanScore > computerScore) {
        console.log("You win!");
    } else {
        console.log("You lose!");
    };
}

playGame();