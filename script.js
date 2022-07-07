'use strict';
/*
 console.log (document.querySelector('.message').textContent);
 document.querySelector('.message').textContent = 'Correct Number';
 
 document.querySelector('.number').textContent = 13;
 document.querySelector('.score').textContent = 10;
 
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;*/

let secretNumber = Math.trunc(Math.random()*20) + 1;

let score = 20;
let highScore = 0; 

const displaymessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
   const guess = Number(document.querySelector('.guess').value);
   console.log(guess, typeof guess);

  if (!guess){
    // document.querySelector('.message').textContent = 'No Number!'
  displaymessage('No number!');



} else if(guess === secretNumber ) {
    // document.querySelector('.message').textContent = 'Correct Number!'
    displaymessage('Correct Number')
    document.querySelector('.number').textContent = secretNumber;
    console.log(secretNumber);
    

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

if (score > highScore){
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
}
   } else if(guess !== secretNumber ){
    if( score > 1){
        // document.querySelector('.message').textContent = guess >secretNumber ? 'Too high!' : 'Too low!'
        displaymessage(guess >secretNumber ? 'Too high!' : 'Too low!')
        score--;
        document.querySelector('.score').textContent = score;
       }else{
        // document.querySelector('.message').textContent = 'You lost the game! :(';
        displaymessage('You lost the game! :(')
        document.querySelector('.score').textContent = 0;
   }
}
    

document.querySelector('.again').addEventListener('click', function(){
score = 20;
secretNumber = Math.trunc(Math.random()*20) + 1;

// document.querySelector('.message').textContent = 'Start Guessing!...';
displaymessage('Start Guessing!...')
document.querySelector('.score').textContent = score;
document.querySelector('.number').textContent = '?';
document.querySelector('.guess').value = '';

document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
})});


