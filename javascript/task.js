// global Var for Play 


var score = 0;
var roundscore
 
  //Dice random
  function rollDice() {
    var die1 = document.getElementById("die1");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var diceTotal = d1 ;
    die1.innerHTML = d1;
    status.innerHTML = "You rolled " + diceTotal+".";
    if((d1 === 2) || (d1 ===3)) {
        status.innerHTML += "Yes! Not Bad!!";
    } else if ((d1 === 4) || (d1 === 5)) {
        status.innerHTML += "Good More Is Perfect";
    }else if (d1 === 6) {
        status.innerHTML += "Lucky! You Take The Big Deal!"
    }else{
        status.innerHTML += "Turn Over Next Player !"
    }
  }
 //Dice number return
const deTexte = {
  '1' : 'Un',
  '2' : 'Deux',
  '3' : 'Trois',
  '4' : 'Quatre',
  '5' : 'Cinq',
  '6' : 'Six',
}

//Tirage de dés images
function frontDice(){
  if(number1 == 1){
    
  }
}

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