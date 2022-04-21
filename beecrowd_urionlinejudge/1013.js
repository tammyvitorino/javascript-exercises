// // Faça um programa que leia três valores e apresente o maior dos três valores lidos seguido da mensagem “eh o maior”. Utilize a fórmula: MaiorAB (a + b + abs(a-b))/2
// Obs.: a fórmula apenas calcula o maior entre os dois primeiros (a e b). Um segundo passo, portanto é necessário para chegar no resultado esperado.

// ENTRADA >> O arquivo de entrada contém três valores inteiros.

// SAÍDA >> Imprima o maior dos três valores seguido por um espaço e a mensagem "eh o maior".

// Exemplo de saída: 106 eh o maior

const input = require('fs').readFileSync('/dev/stdin', 'utf8')

const [A, B, C] = input.split(' ').map(item => parseInt(item))

const maiorAB = (A + B + Math.abs(A - B)) / 2
const maiorABC = (maiorAB + C + Math.abs(maiorAB - C)) / 2

console.log(maiorABC + ' eh o maior')
