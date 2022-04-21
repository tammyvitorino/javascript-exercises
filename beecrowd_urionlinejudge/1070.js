//Leia um valor inteiro X. Em seguida apresente os 6 valores ímpares consecutivos a partir de X, um valor por linha, inclusive o X ser for o caso.

// ENTRADA >> A entrada será um valor inteiro positivo.
// SAÍDA >> A saída será uma sequência de seis números ímpares.

var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

var number = parseInt(lines.shift())

// verifica se o número é ímpar

if (number % 2 === 0) {
  number += 1
}

// imprime 6 números ímpares consecutivos
for (i = 1; i <= 6; i++) {
  console.log(number)
  number += 2
}
