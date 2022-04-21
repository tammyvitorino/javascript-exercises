// Leia um valor inteiro. A seguir, calcule o menor número de notas possíveis (cédulas) no qual o valor pode ser decomposto. As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. A seguir mostre o valor lido e a relação de notas necessárias.

// Entrada
// O arquivo de entrada contém um valor inteiro N (0 < N < 1000000).

// Saída
// Imprima o valor lido e, em seguida, a quantidade mínima de notas de cada tipo necessárias.
// Exemplo de Entrada >>  576

// Exemplo de Saída >> 576
// 5 nota(s) de R$ 100,00
// 1 nota(s) de R$ 50,00
// 1 nota(s) de R$ 20,00
// 0 nota(s) de R$ 10,00
// 1 nota(s) de R$ 5,00
// 0 nota(s) de R$ 2,00
// 1 nota(s) de R$ 1,00

var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

var n = lines.shift()

console.log(n)

console.log(parseInt(n / 100) + ' nota(s) de R$ 100,00')
n = n - parseInt(n / 100) * 100

console.log(parseInt(n / 50) + ' nota(s) de R$ 50,00')
n = n - parseInt(n / 50) * 50

console.log(parseInt(n / 20) + ' nota(s) de R$ 20,00')
n = n - parseInt(n / 20) * 20

console.log(parseInt(n / 10) + ' nota(s) de R$ 10,00')
n = n - parseInt(n / 10) * 10

console.log(parseInt(n / 5) + ' nota(s) de R$ 5,00')
n = n - parseInt(n / 5) * 5

console.log(parseInt(n / 2) + ' nota(s) de R$ 2,00')
n = n - parseInt(n / 2) * 2

console.log(parseInt(n / 1) + ' nota(s) de R$ 1,00')
n = n - parseInt(n / 1) * 1
