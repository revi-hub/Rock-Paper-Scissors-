/* Rock Paper Scissors */

/*
Player chooses the 🪨 Rock, 📜 Paper or ✂️ Scissors.
Then the computer randomly chooses 🪨 Rock, 📜 Paper or ✂️ Scissors.

If both, the computer and the player choices are the same it's a tie.
If the computer choice is 🪨 Rock and the player is the 📜 Paper - player wins, if the opposite - computer wins.
If the computer choice is ✂️ Scissors and the player is the 🪨 Rock - player wins, if the opposite - computer wins.
If the computer choice is 📜 Paper and the player is the ✂️ Scissors - player wins, if the opposite - computer wins.
*/

/* 
Initialize constant array options which contains three strings: "Rock","Paper","Scissors"
Declare getComputerChoice function{
    Initialize constant choiceIndex to random number between 0 and 2 inclusively
    return value of options array at choiceIndex position
}

Declare getPlayerChoice function{
    while(1){
        Initialize variable playerChoice to Display message to the user prompting him to write his choice, make the choice lower cased and parse it as an array
        Initialize variable firstLetter to upper cased value at zero index in playerChoice array
        Set zero index inside playerChoice array to firstLetter variable
        set playerChoice to playerChoice transformed to string
        if playerChoice value exists inside options then{
            return playerChoice
        } else{
            display message that input is incorrect
        }
    }
        
}

Declare playRound function that takes two parameters: playerSelection and computerSelection{
    if playerSelection equals computerSelection then
        return "Tie"
    else if playerSelection is "Paper" and computerSelection is "Rock" then
        return "Win"
    else if playerSelection is "Rock" and computerSelection is "Paper" then
        return "Lose"
    else if playerSelection is "Rock" and computerSelection is "Scissors" then
        return "Win"
    else if playerSelection is "Scissors" and computerSelection is "Rock" then
        return "Lose"
    else if playerSelection is "Scissors" and computerSelection is "Paper" then
        return "Win"
    else if playerSelection is "Paper" and computerSelection is "Scissors" then
        return "Lose"
}

Declare game function{
    Initialize playerWins counter to 0
    Initialize computerWins counter to 0
    Initialize counter variable to 0
    Loop that runs until counter is less than 5{
        Initialize playerChoice variable to getPlayerChoice()
        Initialize computerChoice variable to getComputerChoice()
        Initialize roundResult to playRound function with playerChoice and computerChoice as it's parameters
        Message player with what shape both the player and the computer picked and what result of the round is
        if roundResult is `Lose` then
            computerWins increments by one
        if roundResult is `Win` then
            playerWins increments by one
    }
    If playerWins is higher than computerWins then
        Message player that he won and display how many rounds he won and lost
    Else if playerWins is less than computerWins then
        Message player that he lost and display how many rounds he won and lost
    Else
        Message player that it's a tie
}
*/

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