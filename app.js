const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")


const possibleChoices = document.querySelectorAll('button')

let userChoice, computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener("click",(e)=>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))


function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random()* possibleChoices.length)
    console.log(randomNumber)

    if(randomNumber === 0){
        computerChoice = 'rock'
    }
    if(randomNumber === 1){
        computerChoice = 'scissors'
    }
    if(randomNumber === 2){
        computerChoice = 'paper'
    }

    computerChoiceDisplay.innerHTML = computerChoice

}


function getResult(){
    if(computerChoice === userChoice){
        result = "Draw!"
    }
    if(computerChoice === "rock" && userChoice ==='scissors'){
        result = "Lost"
    }
    if(computerChoice === "rock" && userChoice ==='paper'){
        result = "Win"
    }
    if(computerChoice === "paper" && userChoice ==='scissors'){
        result = "Win"
    }
    if(computerChoice === "paper" && userChoice ==='rock'){
        result = "Lost"
    }
    if(computerChoice === "scissors" && userChoice ==='rock'){
        result = "Win"
    }
    if(computerChoice === "scissors" && userChoice ==='paper'){
        result = "Lost"
    }

    resultDisplay.innerHTML = result

}