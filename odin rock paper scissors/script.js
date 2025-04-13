function resetWebpage() {
    const resetPage = document.getElementById("resetButton");
    resetPage = location.reload();
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;


    function playRound(humanChoice, computerChoice) {
        if (computerChoice == "ROCK") {
            if (humanChoice == "ROCK") {
                console.log(`It's Draw, ur choice ${humanChoice} comp choice ${computerChoice}`);
            } else if(humanChoice == "PAPER") {
                console.log(`u won, ur choice ${humanChoice} comp choice ${computerChoice}`);
                humanScore++;
            } else if(humanChoice == "SCISSORS") {
                console.log(`u lost, ur choice ${humanChoice} comp choice ${computerChoice}`);
                computerScore++;
            }
        } else if(computerChoice == "PAPER") {
            if (humanChoice == "PAPER") {
                console.log(`It's Draw, ur choice ${humanChoice} comp choice ${computerChoice}`);
            } else if(humanChoice == "SCISSORS") {
                console.log(`u won, ur choice ${humanChoice} comp choice ${computerChoice}`);
                humanScore++;
            } else if(humanChoice == "ROCK") {
                console.log(`u lost, ur choice ${humanChoice} comp choice ${computerChoice}`);
                computerScore++;
            }
        } else if(computerChoice == "SCISSORS") {
            if (humanChoice == "SCISSORS") {
                console.log(`It's Draw, ur choice ${humanChoice} comp choice ${computerChoice}`);
            } else if(humanChoice == "ROCK") {
                console.log(`u won, ur choice ${humanChoice} comp choice ${computerChoice}`);
                humanScore++;
            } else if(humanChoice == "PAPER") {
                console.log(`u lost, ur choice ${humanChoice} comp choice ${computerChoice}`);
                computerScore++;
            }
        }
        console.log(humanScore);
        console.log(computerScore);
    }
        
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);

    }
}

function getComputerChoice() {
    const randChoice = Math.random();
    let tempChoice = "";
    if (randChoice >= 0 && randChoice <= 1/3) {
        tempChoice = "ROCK";
    } else if (randChoice >= 1/3 && randChoice <= 2/3) {
        tempChoice = "PAPER";
    } else if (randChoice >= 2/3 && randChoice <=1) {
        tempChoice = "SCISSORS";
    } return tempChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("select a move:")
    let humanValue = ""
    if (humanChoice.toLowerCase() == 'rock') {
        humanValue = "ROCK";
    } else if(humanChoice.toLowerCase() == 'paper') {
        humanValue = "PAPER";
    } else if(humanChoice.toLowerCase() == 'scissors') {
        humanValue = "SCISSORS";
    } return humanValue;
}

playGame ();