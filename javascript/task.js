// global Var for Play 
  //Players
var player1 = prompt("what is your name, player 1?");
var player2 = prompt("what is your name, player 2?");
  //Score
var score1 = 100;
var score2 = 0;

  //Dice random
function rollDice() {

  const nombreDecimal =(Math.random() * 6) + 1
  
  const nombre = Math.trunc(nombreDecimal)
  
  return nombre
  document.getElementById("diceRoll").innerHTML = 
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


console.log(player1);
console.log(player2);
console.log(score1);
console.log(score2);
console.log(theWinner())