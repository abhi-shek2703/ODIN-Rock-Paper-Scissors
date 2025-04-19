function resetWebpage() {
    const resetPage = document.getElementById("resetButton");
    resetPage = location.reload();
}

let humanScore = 0;
let computerScore = 0;

function playGame() {

    function playRound(humanChoice, computerChoice) {
        if (computerChoice == "ROCK") {
            if (humanChoice == "ROCK") {
                const output = `It's Draw, ur choice ${humanChoice} comp choice ${computerChoice}`;
                displayToPage(output);
            } else if(humanChoice == "PAPER") {
                const output = `u won, ur choice ${humanChoice} comp choice ${computerChoice}`;
                displayToPage(output);
                humanScore++;
            } else if(humanChoice == "SCISSORS") {
                const output =`u lost, ur choice ${humanChoice} comp choice ${computerChoice}`;
                displayToPage(output);
                computerScore++;
            }
        } else if(computerChoice == "PAPER") {
            if (humanChoice == "PAPER") {
                const output = `It's Draw, ur choice ${humanChoice} comp choice ${computerChoice}`;
                displayToPage(output);
            } else if(humanChoice == "SCISSORS") {
                const output = `u won, ur choice ${humanChoice} comp choice ${computerChoice}`;
                displayToPage(output);
                humanScore++;
            } else if(humanChoice == "ROCK") {
                const output = `u lost, ur choice ${humanChoice} comp choice ${computerChoice}`;
                displayToPage(output);
                computerScore++;
            }
        } else if(computerChoice == "SCISSORS") {
            if (humanChoice == "SCISSORS") {
                const output = `It's Draw, ur choice ${humanChoice} comp choice ${computerChoice}`;
                displayToPage(output);
            } else if(humanChoice == "ROCK") {
                const output = `u won, ur choice ${humanChoice} comp choice ${computerChoice}`;
                displayToPage(output);
                humanScore++;
            } else if(humanChoice == "PAPER") {
                const output = `u lost, ur choice ${humanChoice} comp choice ${computerChoice}`;
                displayToPage(output);
                computerScore++;
            }
        }
        updateScores(humanScore,computerScore);
    }

    let buttons = document.querySelectorAll("button");
    buttons.forEach(buttons => {
        buttons.addEventListener("click", () => {
            if(buttons.id === "rocks") {
                playRound("ROCK",getComputerChoice());
            } else if(buttons.id === "papers") {
                playRound("PAPER",getComputerChoice());
            } else if(buttons.id === "scissorss") {
                playRound("SCISSORS",getComputerChoice());
            }
        });
    });

    function displayToPage(output) {
        document.getElementById("result").innerHTML = output;
    }

    function updateScores(humanScore,computerScore) {
        document.getElementById("humanScore").innerHTML = humanScore;
        document.getElementById("computerScore").innerHTML = computerScore;
        roundPlayed ();
    }

    /*    
    for (let i = 0; i < 5; i++) {
    playRound(humanSelection, computerSelection);
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    }
    */
   function roundPlayed () {
    rounds = "";
    if (humanScore >= "5") {
        rounds = "you won, computer lost";
    } else if (computerScore >= "5") {
        rounds = "you lost, computer won";
    }
    displayRounds(rounds);
   }

   function displayRounds(rounds) {
    document.getElementById("roundss").innerHTML = rounds;
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

playGame();