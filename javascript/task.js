// global Var for Play 


var score = 0;
var roundscore = 0;
var activePlayer = 0;
var gamePlaying = true;
init();
 
  //Dice random
  document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        // 1. Random number
        var dice = Math.floor(Math.random() * 6) + 1;

        //2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';


        //3. Update the round score IF the rolled number was NOT a 1
        if (dice !== 1) {
            //Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            //Next player
            nextPlayer();
        }
    }    
});




// Win or Lose
function theWinner() {
  if(score1>=100){
    console.log('${player1} win the game!')
  }else if(score2>=100){
    console.log('${player2} win the game!')
  }else{
    console.log('Continue the Game')
  }
}
//New Game Start//
document.querySelector('.btnNewGame').addEventListener('click', init);

function init(){
  score=[0, 0];
  activeScore = 0;
  currentScore = 0;
  gameStarted = true;

  document.querySelector('.')
}