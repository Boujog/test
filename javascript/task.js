const lancerDe = function() {

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


const resultat = lancerDe()
console.log(resultat)