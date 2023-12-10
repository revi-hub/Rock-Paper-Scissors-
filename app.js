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