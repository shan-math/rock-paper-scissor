let humanScore = 0;
let computerScore = 0;
let roundsLeft;

function playRound(humanChoice) {
    if (roundsLeft === undefined) {
        roundsLeft = parseInt(document.getElementById("round").value);
    }

    if (roundsLeft <= 0) {
        alert("Game Over! Click Restart to play again.");
        return;
    }

    const computerChoice = getComputerChoice();
    determineWinner(humanChoice, computerChoice);

    document.getElementById("your-choice").textContent = humanChoice;
    document.getElementById("computer-choice").textContent = computerChoice;
    document.getElementById("your-score").textContent = humanScore;
    document.getElementById("computer-score").textContent = computerScore;

    roundsLeft--;

    if (roundsLeft === 0) {
        setTimeout(() => {
            alert(
                `Game Over!\nFinal Score - You: ${humanScore} | Computer: ${computerScore}`
            );
        }, 500);
    }
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function determineWinner(human, computer) {
    if (human === computer) {
        document.getElementById("winner").textContent = "It's a Draw!";
    } else if (
        (human === "rock" && computer === "scissors") ||
        (human === "paper" && computer === "rock") ||
        (human === "scissors" && computer === "paper")
    ) {
        document.getElementById("winner").textContent = "🎉 You Win!";
        humanScore++;
    } else {
        document.getElementById("winner").textContent = "💀 Computer Wins!";
        computerScore++;
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    roundsLeft = undefined;
    document.getElementById("your-score").textContent = "0";
    document.getElementById("computer-score").textContent = "0";
    document.getElementById("your-choice").textContent = "-";
    document.getElementById("computer-choice").textContent = "-";
    document.getElementById("winner").textContent = "";
}
