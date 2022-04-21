var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

// Escreva um programa que leia o número de um funcionário, seu número de horas trabalhadas, o valor que recebe por hora e calcula o salário desse funcionário. A seguir, mostre o número e o salário do funcionário, com duas casas decimais.

// ENTRADA >> O arquivo de entrada contém 2 números inteiros e 1 número com duas casas decimais, representando o número, quantidade de horas trabalhadas e o valor que o funcionário recebe por hora trabalhada, respectivamente.

// SAÍDA >> Imprima o número e o salário do funcionário, com um espaço em branco antes e depois da igualdade. No caso do salário, também deve haver um espaço em branco após o $.

var number = parseInt(lines.shift())
var hours = parseInt(lines.shift())
var salary = parseFloat(lines.shift())

var totalSalary = hours * salary

console.log(
  'NUMBER = ' + number + '\n' + 'SALARY = U$ ' + totalSalary.toFixed(2)
)
