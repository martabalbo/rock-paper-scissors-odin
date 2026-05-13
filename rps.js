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

console.log(getHumanChoice());