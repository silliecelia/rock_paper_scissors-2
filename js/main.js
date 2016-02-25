var userChoice;
var computerChoice;
var userScore = 0;
var computerScore = 0;
var result;

$('#reset').on('click', function(){
 	userScore = 0;
 	computerScore = 0;
 	$('#humanScore').html(userScore);
 	$('#computerScore').html(computerScore);
});

// on click, get user choice
$('.choices button').on('click',function(){
	userChoice = $(this).find('.type').html();
	computerChoice = getComputerChoice();
	console.log(userChoice);
	console.log(computerChoice);
	getWinner();
});

function getWinner(){
	// if (userChoice === "Rock" && computerChoice === "Paper"){
	// 	console.log('You Lose');
	// }
	// else if (userChoice === 'Rock' && computerChoice === 'Scissors'){
	// console.log('You Win');
	// }
	// else if (userChoice === 'Rock' && computerChoice === 'Rock'){
	// console.log('You Tie');
	// }
	// else if (userChoice === 'Paper' && computerChoice === 'Paper'){
	// console.log('You Tie');
	// }
	// else if (userChoice === 'Paper' && computerChoice === 'Scissors'){
	// console.log('You Lose');
	// }
	// else if (userChoice === 'Paper' && computerChoice === 'Rock'){
	// console.log('You Win');
	// }
	// else if (userChoice === 'Scissors' && computerChoice === 'Paper'){
	// console.log('You Win');
	// }
	// else if (userChoice === 'Scissors' && computerChoice === 'Scissors'){
	// console.log('You Tie');
	// }
	// else if (userChoice === 'Scissors' && computerChoice === 'Rock'){
	// console.log('You Lose');
	// }

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
  // return result;
	$('#status').html('You chose '+ userChoice +'. Computer chose '+computerChoice + '. '+ result);
	 $('#humanScore').html(userScore);
 	$('#computerScore').html(computerScore);
 	console.log(result);

}

// if(   condition ){
// 	// do something
// }

// get random computer choice
function getComputerChoice() {

//defining options in arrays
 var plays = ['rock', 'paper', 'scissors']; 
 //randomly seleting option 
 var randNum = Math.floor(Math.random() * plays.length); //setting up range, 0 to 3, .floor is roudning up to nearest integer
 var play = plays[randNum]; //plays number based on the range
 return play; //actually spits out the number
}

