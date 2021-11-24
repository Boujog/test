// global Var for Play 
 /* //Players 
var player1 = prompt("what is your name, player 1?");
var player2 = prompt("what is your name, player 2?");
 */
/* //Score 
var score1 = 100;
var score2 = 0;
 */
  //Dice random
  /*
  function rollDice() {
    var die1 = document.getElementById("die1");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var diceTotal = d1 ;
    die1.innerHTML = d1;
    status.innerHTML = "You rolled " + diceTotal+".";
    if(d1 == 1) {
        status.innerHTML += "Sorry! You turn is over!!";
    } else if (d1 === 3) {
        status.innerHTML += "half life 3 confirmed";
    }else if (d1 === 6) {
        status.innerHTML += "Lucky! Take the big Roll"
    }
  
  }
 */
  function rollDice() {
    var die1 = document.getElementById("die1");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var diceTotal = d1 ;
    die1.innerHTML = d1;
    status.innerHTML = "You rolled " + diceTotal+".";
    switch(diceTotal) {
      case "2":
        status.innerHTML += "you short!!";
      break;
      case "3":
        status.innerHTML += "not bad";
      break;
      case "4":
        status.innerHTML += "good";
      break;
      case "5":
        status.innerHTML += "good";
      break;
      case "6":
        status.innerHTML += "Lucky!";
      break;
      default:
        status.innerHTML += "Sorry! You turn is over!!";
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