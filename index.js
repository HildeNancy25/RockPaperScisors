const getUserChoice = (userInput) =>{
    // userInput = userInput.toLowerCase();

    if (userInput ==="paper" || userInput === "rock" || userInput === "scissors"){
        return userInput;
    } else {
        console.log('some error happened!');
    }
};

// testing user choice
var input = getUserChoice("paper");
console.log(input);

const getComputerChoice = () =>{
    const random = Math.floor(Math.random() * 3);

    if (random === 0){
        return 'paper';
    } else if (random === 1){
        return 'rock';
    } else if (random === 2){
        return 'scissors';
    } else {
        return 'computer error';
    }
};

// testing computer choice 
const rdm = getComputerChoice('rock');
console.log(rdm);

const determineWinner = (userChoice, computerChoice) =>{
    if (userChoice === computerChoice){
        return "the game was tied!";
    }
    if (userChoice === 'paper'){
        if (computerChoice === 'rock'){
            return "congratulations, it's a WIN!";
        } 
        else {
        return "sorry, you lost the game!";
        }
    }

    if (userChoice === 'rock'){
        if (computerChoice === 'scissors'){
            return 'congratulations, you won!';
        } else {
            return 'you lost over the computer choice';
        }
    }

    if (userChoice === 'scissors'){
        if (computerChoice === 'paper'){
            return 'congratulations, big WIN!';
        } else {
            return 'you lost over the computer choice';
        }
    } 
};

// testing the result
var result = determineWinner(input, rdm);
console.log(result);

function playGame (){
    var userChoice = getUserChoice('scissors');
    var computerChoice = getComputerChoice('paper');
    console.log("Your choice was: " + userChoice)
    console.log("and the computer choice was: " + computerChoice);
    console.log(determineWinner(userChoice , computerChoice));
}

var thePlay = playGame();
console.log(thePlay);

