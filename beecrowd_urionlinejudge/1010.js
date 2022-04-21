// Neste problema, deve-se ler o código de uma peça 1, o número de peças 1, o valor unitário de cada peça 1, o código de uma peça 2, o número de peças 2 e o valor unitário de cada peça 2. Após, calcule e mostre o valor a ser pago.

// ENTRADA >> O arquivo de entrada contém duas linhas de dados. Em cada linha haverá 3 valores, respectivamente dois inteiros e um valor com 2 casas decimais.

// SAÍDA >> A saída deverá ser uma mensagem, lembrando de deixar um espaço após os dois pontos e um espaço após o "R$". O valor deverá ser apresentado com 2 casas após o ponto.

var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

var [code01, quant01, price01] = lines.shift().split(' ')
var [code02, quant02, price02] = lines.shift().split(' ')

var totalPrice01 = quant01 * price01
var totalPrice02 = quant02 * price02

var totalPurchase = totalPrice01 + totalPrice02

console.log('VALOR A PAGAR: R$ ' + totalPurchase.toFixed(2))
