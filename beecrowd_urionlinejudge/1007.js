var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

// Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto de A e B pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).

// ENTRADA >> O arquivo de entrada contém 4 valores inteiros.

// SAÍDA >> Imprima a mensagem DIFERENCA com todas as letras maiúsculas, com um espaço em branco antes e depois da igualdade.

var A = parseInt(lines.shift())
var B = parseInt(lines.shift())
var C = parseInt(lines.shift())
var D = parseInt(lines.shift())

var produtoAB = A * B
var produtoCD = C * D

var diferenca = produtoAB - produtoCD

console.log('DIFERENCA = ' + diferenca)
