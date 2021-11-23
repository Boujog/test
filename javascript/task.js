// global Var for Play 
  //Players
var player1 = prompt("what is your name, player 1?");
var player2 = prompt("what is your name, player 2?");
  //Score
var score1 = 0;
var score2 = 0;

const rollDice = function() {

  const nombreDecimal =(Math.random() * 6) + 1
  
  const nombre = Math.trunc(nombreDecimal)

  return nombre
}

const deTexte = {
  '1' : 'Un',
  '2' : 'Deux',
  '3' : 'Trois',
  '4' : 'Quatre',
  '5' : 'Cinq',
  '6' : 'Six',
}

console.log(player1);
console.log(player2);
console.log(score1);
console.log(score2);