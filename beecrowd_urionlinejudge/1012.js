// // Escreva um programa que leia três valores com ponto flutuante de dupla precisão: A, B e C. Em seguida, calcule e mostre:
// a) a área do triângulo retângulo que tem A por base e C por altura.
// b) a área do círculo de raio C. (pi = 3.14159)
// c) a área do trapézio que tem A e B por bases e C por altura.
// d) a área do quadrado que tem lado B.
// e) a área do retângulo que tem lados A e B.

// ENTRADA >> O arquivo de entrada contém três valores com um dígito após o ponto decimal.

// SAÍDA >> O arquivo de saída deverá conter 5 linhas de dados. Cada linha corresponde a uma das áreas descritas acima, sempre com mensagem correspondente e um espaço entre os dois pontos e o valor. O valor calculado deve ser apresentado com 3 dígitos após o ponto decimal.

// Exemplos de saída:
// TRIANGULO: 7.800
// CIRCULO: 84.949
// TRAPEZIO: 18.200
// QUADRADO: 16.000
// RETANGULO: 12.000

var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

var line = lines.shift().split(' ')

var a = parseFloat(line[0])
var b = parseFloat(line[1])
var c = parseFloat(line[2])

var pi = 3.14159

var triangulo = (a * c) / 2.0
var circulo = pi * (c * c)
var trapezio = ((a + b) * c) / 2
var quadrado = b * b
var retangulo = a * b

console.log('TRIANGULO: ' + triangulo.toFixed(3))
console.log('CIRCULO: ' + circulo.toFixed(3))
console.log('TRAPEZIO: ' + trapezio.toFixed(3))
console.log('QUADRADO: ' + quadrado.toFixed(3))
console.log('RETANGULO: ' + retangulo.toFixed(3))
