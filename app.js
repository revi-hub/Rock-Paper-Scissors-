/* Rock Paper Scissors */

const options = ["Rock", "Paper", "Scissors"]

function getComputerChoice(){
    const choiceIndex = Math.floor(Math.random() * 3)
    return options[choiceIndex]
}

function getPlayerChoice() {
    while(1){
        let playerChoice = prompt(`Please write to select: "Rock", "Paper" or "Scissors"`)

        if(playerChoice != null){
            playerChoice = playerChoice.toLowerCase().split('')
            let firstLetter = playerChoice[0].toUpperCase()
            playerChoice[0] = firstLetter
            playerChoice = playerChoice.join('')
        }
        if(options.includes(playerChoice)) {
            return playerChoice
        } else {
            alert("Looks like your input was incorrect, please try again!")
        }
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "Tie"
    }
    else if(playerSelection == "Paper" && computerSelection == "Rock"){
        return "Win"
    }
    else if(playerSelection == "Rock" && computerSelection == "Paper"){
        return "Lose"
    }
    else if(playerSelection == "Rock" && computerSelection == "Scissors"){
        return "Win"
    }
    else if(playerSelection == "Scissors" && computerSelection == "Rock"){
        return "Lose"
    }
    else if(playerSelection == "Scissors" && computerSelection == "Paper"){
        return "Win"
    }
    else if(playerSelection == "Paper" && computerSelection == "Scissors"){
        return "Lose"
    }
}

function game(){
    let playerWins = 0
    let computerWins = 0
    for(let i = 0; i < 5; i++){
        let playerChoice = getPlayerChoice()
        let computerChoice = getComputerChoice()
        let roundResult = playRound(playerChoice, computerChoice)
        alert(`You picked ${playerChoice} and computer picked ${computerChoice}, It's a ${roundResult}!`)
        if(roundResult == `Lose`){
            computerWins += 1
        } 
        else if(roundResult == `Win`){
            playerWins += 1
        } 
    }
    if(playerWins > computerWins){
        alert(`You won, congratulations! Your score: ${playerWins}; Computer score: ${computerWins}`)
    }
    else if(playerWins < computerWins){
        alert(`You lost, better luck next time! Your score: ${playerWins}; Computer score: ${computerWins}`)
    }
    else{
        alert(`It's a Tie! Your score: ${playerWins}; Computer score: ${computerWins}`)
    }
}

game()