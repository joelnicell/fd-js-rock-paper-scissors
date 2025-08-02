const WORDS = ["rock", "paper", "scissors"];

const MAGIC_MESSAGES = [
  "The fate of the universe is in your hands...",
  "A paper cut would really hurt here...",
  "Snip, Smother, or Smash?",
];

const WINNER = {
  player: 0,
  computer: 1,
  draw: 2,
};

function randomItemFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function computerPlay() {
  return randomItemFromArray(WORDS);
}

function generateRandomMessage() {
  return randomItemFromArray(MAGIC_MESSAGES);
}

function userInput(message = `Are you choosing ${WORDS}?`) {
  let response = prompt(`${message} \n\n${generateRandomMessage()}`);
  if (response === null) {
    return;
  }

  response = response.toLowerCase().trim();
  if (WORDS.includes(response)) {
    return response;
  } else {
    return userInput(`Please enter a valid option from: ${WORDS}`);
  }
}

function playRound(playerSelection, computerSelection) {
  switch (playerSelection + "+" + computerSelection) {
    // draw state
    case "rock+rock":
      return ["Draw! You both played Rock 🪨", WINNER.draw];
    case "paper+paper":
      return ["Draw! You both played Paper 📄", WINNER.draw];
    case "scissors+scissors":
      return ["Draw! You both played Scissors ✂️", WINNER.draw];

    case "rock+paper":
      return ["You Lose! Paper 📄 beats Rock 🪨", WINNER.computer];
    case "rock+scissors":
      return ["You Win! Rock 🪨 beats Scissors ✂️", WINNER.player];
    case "paper+rock":
      return ["You Win! Paper 📄 beats Rock 🪨", WINNER.player];
    case "paper+scissors":
      return ["You Lose! Scissors ✂️ beats Paper 📄", WINNER.computer];
    case "scissors+rock":
      return ["You Lose! Scissors ✂️ beats Rock 🪨", WINNER.computer];
    case "scissors+paper":
      return ["You Win! Scissors ✂️ beats Paper 📄", WINNER.player];
    default:
      return ["No winner!", WINNER.draw];
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let finalResult;

  for (let round = 1; round <= 5; round++) {
    const playerSelection = userInput(
      `Round ${round}: Choose rock, paper, or scissors.`
    );
    if (playerSelection === null) {
      console.log("Game exited by user.");
      return;
    }

    const computerSelection = computerPlay();
    const [roundResult, winner] = playRound(playerSelection, computerSelection);

    if (winner === WINNER.player) {
      playerScore++;
    } else if (winner === WINNER.computer) {
      computerScore++;
    }

    console.log(
      `Score after Round ${round}: You ${playerScore} - ${computerScore} Computer\n`
    );
    alert(roundResult);
  }

  if (playerScore > computerScore) {
    finalResult = "🎉 You are the overall winner!";
  } else if (computerScore > playerScore) {
    finalResult = "💻 The computer wins this time.";
  } else {
    finalResult = "🤝 It's a tie!";
  }

  console.log("Final Result:");
  console.log(finalResult);
  alert(finalResult);
}

game();
