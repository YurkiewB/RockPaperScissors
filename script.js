console.log("Hello lets play!")//Hello.
let user;
let cpu;
let computerScore = 0;
let playerScore = 0;
const buttons = document.querySelectorAll("button");
const container = document.querySelector("#results");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const img = button.querySelector("img");
    user = img.alt.toLowerCase();
    RockPaperScissors(user, cpu);
  });
});


const compMoves = ["rock", "paper", "scissors"];

function computerPlay() {
  return compMoves[Math.floor(Math.random()*compMoves.length)];
}

function RockPaperScissors(user, cpu) {
  cpu = computerPlay().toLowerCase();
  user = user.toLowerCase();
  console.log(`You played ${user}`);
  console.log(`Computer played ${cpu}`);
  if (user === cpu){
    updateResults("You and the computer played the same move, go again.");
}   else if (user==="rock" && cpu==="scissors" ){
    updateResults("You played Rock, Computer played Scissors: You win! Good job, test your luck agian?");
    playerScore = ++playerScore;
    keepPlayerScore();
}   else if (user==="scissors" && cpu==="rock"){
    updateResults("You played Scissors, Computer played rock: You loose! Try again.");
    computerScore = ++computerScore;
    keepCompScore();
}   else if (user==="paper" && cpu==="rock"){
    updateResults("You played Paper, Computer played Rock: You win! Good job, test your luck agian? ");
    playerScore = ++playerScore;
    keepPlayerScore();
}   else if (user==="rock" && cpu==="paper"){
    updateResults("You played Rock, Computer played Paper: You loose! Try again.");
    computerScore = ++computerScore;
    keepCompScore();
}   else if (user==="scissors" && cpu==="paper"){
    updateResults("You played Scissors, Computer played Paper: You win! Good job, test your luck agian?");
    playerScore = ++playerScore;
    keepPlayerScore();
}   else if (user==="paper" && cpu==="scissors"){
    updateResults("You played Paper, Computer played Scissors: You loose! Try again.");
    computerScore = ++computerScore;
    keepCompScore();
}
};

function updateResults(str){
  container.textContent = str;
}

function keepPlayerScore(str){
  let playerScoreBox = document.querySelector("#playScore");
  playerScoreBox.textContent = playerScore;
}

function keepCompScore(str){
  let computerScoreBox = document.querySelector("#compScore");
  computerScoreBox.textContent = computerScore;
}
