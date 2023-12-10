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
*/