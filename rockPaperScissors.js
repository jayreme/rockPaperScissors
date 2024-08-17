const getComputerChoice =  () => {
    const choice = Math.floor(Math.random() * 3  +1);
    switch(choice){
        case 1: 
            return 'rock'
            break;
        case 2:
            return 'paper'
            break;
        case 3:
            return 'scissors'
            break;
        default:
            break;
    }
}

const getHumanChoice = () => {
    const choice = prompt("Enter your choice: ").toLowerCase()
    console.log(choice)
    return choice;
}

const playRound = (humanChoice, computerChoice) => {
    if(humanChoice == computerChoice){
        return console.log('Tie no points for this round')
    }
    else if(humanChoice == 'paper' && computerChoice == 'rock' || humanChoice == 'scissors' && computerChoice == 'paper' || humanChoice == 'rock' && computerChoice == 'scissors'){
        humanScore++;
        return console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    }
    else{
        computerScore++;
        return console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
    }
}

let humanScore = 0 , computerScore = 0;

const playGame = () => {
    
    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
    }
    if(humanScore > computerScore) {
        console.log(`You win the game with a score of ${humanScore} - ${computerScore}`)
    }
    else if (humanScore == computerScore){
        console.log(`No one wins! It's a tie`)
    }
    else{
        console.log(`You lose the game with a score of ${humanScore} - ${computerScore}`)
    }
    humanScore =0,computerScore=0;

}