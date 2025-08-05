const WORDS = ["rock", "paper", "scissors"];

const MAGIC_MESSAGES = [
  "The fate of the universe is in your hands...",
  "A paper cut would really hurt here...",
  "Snip, Smother, or Smash?",
  "It's clobbering time!",
  "Scissors is basically 2 knives... easy choice..."
];

const WINNER = {
  player: 0,
  computer: 1,
  draw: 2,
};

const ROUNDS = 5;

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
  let response = prompt(`${message}`);
  if (response === null) {
    return null;
  }

  response = response.toLowerCase().trim();
  if (WORDS.includes(response)) {
    return response;
  } else {
    return userInput(`Please enter a valid option from: Rock, Paper or Scissors`);
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
  let cancelled = false;

  for (let round = 1; round <= ROUNDS; round++) {
    const playerSelection = userInput(
      `Round ${round}: Choose Rock, Paper, or Scissors.\n\n${generateRandomMessage()}\n\nComputer: ${computerScore} - You: ${playerScore}`
    );

    if (playerSelection === null) {
      // console.log("Game exited by user.");
      cancelled = true;
      break;
    }

    const computerSelection = computerPlay();
    const [roundResult, winner] = playRound(playerSelection, computerSelection);

    if (winner === WINNER.player) {
      playerScore++;
    } else if (winner === WINNER.computer) {
      computerScore++;
    }

    // console.log(
    //   `Score after Round ${round}: You ${playerScore} - ${computerScore} Computer\n`
    // );
    alert(roundResult);
  }

  if (cancelled) {
    alert("You cancelled the game.\n\nRefresh the page to play 👾");
    return;
  } 
  
  if (playerScore > computerScore) {
    finalResult = `🎉 You are the overall winner!\n\nComputer's score: ${computerScore}. Your score: ${playerScore}.\n\nRefresh the page to play again 👾`;
  } else if (computerScore > playerScore) {
    finalResult = `💻 The computer wins this time.\n\nComputer's score: ${computerScore}. Your score: ${playerScore}.\n\nRefresh the page to play again 👾`;
  } else {
    finalResult = `🤝 It's a tie!\n\nComputer's score: ${computerScore}. Your score: ${playerScore}.\n\nRefresh the page to play again 👾`;
  }

  // console.log("Final Result:");
  // console.log(finalResult);
  alert(finalResult);
}

alert(`Welcome to Rock Paper Scissors! Here's a recap of the rules:\n\nYou must choose one of three weapons: Rock 🪨, Paper 📄, or Scissors ✂️. Each weapon competes against a competitor's choice, each has strengths and weaknesses...\n\nPaper beats Rock, \nRock beats Scissors, \nand Scissors beats Paper.\n\nYou will have ${ROUNDS} rounds to defeat the evil AI - whoever has the most wins will come out victorious! 👑\n\nChoose wisely web warrior... 🫡`);
game();
