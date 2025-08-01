function computerPlay() {
    const random = Math.random() * 3;
    if (random < 1) return "rock"
    else if (random < 2) return "paper"
    else return "scissors"
}

function generateRandomMessage() {
    const MESSAGES = 3;
    const random = Math.random() * MESSAGES;
    if (random < 1) return "The fate of the universe is in your hands..."
    else if (random < 2) return "A paper cut would really hurt here..."
    else return "Snip, Smother, or Smash?"
}

function userInput(message="Are you choosing 'rock', 'paper' or 'scissors'?") {
    let response =  prompt(`${message} \n\n${generateRandomMessage()}`)
    // todo: add better error handling if the user exits out of the game
    if (response === null) {
        return;
    }
    response.toLowerCase();
    console.log(response)
    if (response == "rock" || response == "paper" || response == "scissors") {
        return response;
    } else {
        return userInput("Please enter a valid option.")
    }
}

function playRound(playerSelection, computerSelection) {

    switch (playerSelection + "+" + computerSelection){
        // draw state
        case "rock+rock":
            return "Draw! You both played Rock 🪨"
        case "paper+paper":
            return "Draw! You both played Paper 📄"
        case "scissors+scissors":
            return "Draw! You both played Scissors ✂️"

        case "rock+paper":
            return "You Lose! Paper 📄 beats Rock 🪨"
        case "rock+scissors":
            return "You Win! Rock 🪨 beats Scissors ✂️"
        case "paper+rock":
            return "You Win! Paper 📄 beats Rock 🪨"
        case "paper+scissors":
            return "You Lose! Scissors ✂️ beats Paper 📄"
        case "scissors+rock":
            return "You Lose! Scissors ✂️ beats Rock 🪨"
        case "scissors+paper":
            return "You Win! Scissors ✂️ beats Paper 📄"
        default:
            return "No winner!";
    }
}

function game() {
    // todo:
    // 1. Put below's code in here
    // 2. keep track of state with a variable
    // 3. put playRound in a loop
    // 4. put the user - computer score in the prompt for better user experience
    //
}

const playerSelection = userInput();
// todo: if user exits out, what should you do here?
const computerSelection = computerPlay()
const result = playRound(playerSelection, computerSelection)
alert(result);