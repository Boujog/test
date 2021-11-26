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



document.querySelector('.btn-hold').addEventListener('click', function() {
  if (gamePlaying) {
      // Add CURRENT score to GLOBAL score
      scores[activePlayer] += roundScore;

      // Update the UI
      document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

      // Check if player won the game
      if (scores[activePlayer] >= 100) {
          document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
          document.querySelector('.dice').style.display = 'none';
          document.querySelector('.player_' + activePlayer + '_panel').classList.add('winner');
          document.querySelector('.player_' + activePlayer + '_panel').classList.remove('active');
          gamePlaying = false;
      } else {
          //Next player
          nextPlayer();
      }
  }
});


////
function nextPlayer() {
  //Next player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current_0').textContent = '0';
  document.getElementById('current_1').textContent = '0';

  document.querySelector('.player_0_Party').classList.toggle('active');
  document.querySelector('.player_1_Party').classList.toggle('active');

  //document.querySelector('.player-0-panel').classList.remove('active');
  //document.querySelector('.player-1-panel').classList.add('active');

  document.querySelector('.dice').style.display = 'none';
}



function nextPlayer() {
  //Next player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current_0').textContent = '0';
  document.getElementById('current_1').textContent = '0';

  document.querySelector('.player_0_Party').classList.toggle('active');
  document.querySelector('.player_0_Party').classList.toggle('active');

  //document.querySelector('.player-0-panel').classList.remove('active');
  //document.querySelector('.player-1-panel').classList.add('active');

  document.querySelector('.dice').style.display = 'none';
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