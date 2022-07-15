/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  let choices = ['rock', 'paper', 'scissors'];
  let result = choices[Math.floor(Math.random() * choices.length)];
  return result;
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  console.log(playerChoice + " and computerChoice : " + computerChoice);
  if(playerChoice === computerChoice){
    return 0;
  }

  // All situations where human draws, set `score` to 0
  if(playerChoice == 'rock' &&  computerChoice == 'scissors')
  {
    return 1;
  }
  else if(playerChoice == 'scissors' && computerChoice == 'paper'){
    return 1;
  }
  else if(playerChoice == 'paper' && computerChoice == 'rock'){
    return 1;
  }
  else
    return -1;
  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  

  // Otherwise human loses (aka set score to -1)
  

  // return score
  
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
  let answer = score;
  let scoreDiv = document.getElementById('player-score');
  if(scoreDiv == ""){
    scoreDiv.innerText = answer;
  }
  else{
    scoreDiv.innerText = Number(scoreDiv.innerText) + answer;
  }

  let result = document.getElementById('result');
  if(answer == -1){
    result.innerText = "You lose!";
  }
  else if(answer == 1){
    result.innerText = "You win!";
  }
  else{
    result.innerText = "Drawn!";
  }
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  let computerChoice = getComputerChoice();
  let score =  getResult(playerChoice, computerChoice);
  showResult(score, playerChoice, computerChoice);
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
    console.log("Game started");
  // use querySelector to select all RPS Buttons
  let rpsS = document.querySelectorAll('.rpsButton');
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  rpsS.forEach(rps => {
    rps.onclick = () => {
        let playerChoice = rps.value;
        onClickRPS(playerChoice);
    }
  })
  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

 
  let endclick = document.getElementById('endGameButton');
  // Add a click listener to the end game button that runs the endGame() function on click
  endclick.onclick = () => {
    endGame();
  }
}

// ** endGame function clears all the text on the DOM **
function endGame() {
    let result = document.getElementById('result');
    result.innerHTML = '';
    let scoreDiv = document.getElementById('player-score');
    scoreDiv.innerHTML = '';

}

playGame()