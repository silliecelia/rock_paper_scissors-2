var userChoice;
var computerChoice;
var userScore = 0;
var computerScore = 0;
var result;

// on click, reset
$('#reset').on('click', function(){
 userScore = 0;
 computerScore = 0;
 $('#humanScore').html(userScore);
 $('#computerScore').html(computerScore);
});

// on click, get user choice
$('.choices button').on('click',function(){
 userChoice = $(this).find('.type').html();
 // userChoice = userChoice.toLowerCase();
 computerChoice = getComputerChoice();
 console.log(userChoice);
 console.log(computerChoice);
 getWinner();
});

function getWinner(){
 // userChoice // computerChoice
 if (userChoice === 'rock') {
   if (computerChoice === 'rock') {
     result = 'Tie';
   } else if (computerChoice === 'paper') {
     result = 'You Lose';
     computerScore++;
   } else if (computerChoice === 'scissors') {
     result = 'You Win';
     userScore++;
   }
 } else if (userChoice === 'paper') {
   if (computerChoice === 'rock') {
     result = 'You Win';
     userScore++;
   } else if (computerChoice === 'paper') {
     result = 'Tie';
   } else if (computerChoice === 'scissors') {
     result = 'You Lose';
     computerScore++;
   }
 } else if (userChoice === 'scissors') {
   if (computerChoice === 'rock') {
     result = 'You Lose';
     computerScore++;
   } else if (computerChoice === 'paper') {
     result = 'You Win';
     userScore++;
   } else if (computerChoice === 'scissors') {
     result = 'Tie';
   }
 }
 $('#status').html('You chose '+userChoice+'. Computer chose '+computerChoice+'. '+result+'.');
 $('#humanScore').html(userScore);
 $('#computerScore').html(computerScore);
 console.log(result);
}

// get random computer choice
function getComputerChoice() {
 var plays = ['rock', 'paper', 'scissors'];
 var randNum = Math.floor(Math.random() * plays.length);
 var play = plays[ randNum ];
 return play;
}