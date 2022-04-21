// // Leia os quatro valores correspondentes aos eixos x e y de dois pontos quaisquer no plano, p1(x1,y1) e p2(x2,y2) e calcule a distância entre eles, mostrando 4 casas decimais após a vírgula, segundo a fórmula:
// Distancia: sqrt((x2 - x1)^2 + (y2 - y1)^2)

// ENTRADA >> O arquivo de entrada contém três valores inteiros.

// SAÍDA >> Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior".

// Exemplo de saída: 106 eh o maior

var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

var [x1, y1] = lines.shift().split(' ')
var [x2, y2] = lines.shift().split(' ')

var x12 = Math.pow(x2 - x1, 2)
var y12 = Math.pow(y2 - y1, 2)
var xy = x12 + y12
var distance = Math.sqrt(xy)

console.log(distance.toFixed(4))
