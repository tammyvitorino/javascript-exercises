// Read a value of floating point with two decimal places. This represents a monetary value. After this, calculate the smallest possible number of notes and coins on which the value can be decomposed. The considered notes are of 100, 50, 20, 10, 5, 2. The possible coins are of 1, 0.50, 0.25, 0.10, 0.05 and 0.01. Print the message “NOTAS:” followed by the list of notes and the message “MOEDAS:” followed by the list of coins.

// Input
// The input file contains a value of floating point N (0 ≤ N ≤ 1000000.00).

// Output
// Print the minimum quantity of banknotes and coins necessary to change the initial value, as the given example.
// For the input 576.73 print:
// NOTAS:
// 5 nota(s) de R$ 100.00
// 1 nota(s) de R$ 50.00
// 1 nota(s) de R$ 20.00
// 0 nota(s) de R$ 10.00
// 1 nota(s) de R$ 5.00
// 0 nota(s) de R$ 2.00
// MOEDAS:
// 1 moeda(s) de R$ 1.00
// 1 moeda(s) de R$ 0.50
// 0 moeda(s) de R$ 0.25
// 2 moeda(s) de R$ 0.10
// 0 moeda(s) de R$ 0.05
// 3 moeda(s) de R$ 0.01

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');

let valores = lines.shift()

console.log("NOTAS:")

let notas100 = valores / 100
valores = valores - (parseInt(notas100) * 100)
console.log(parseInt(notas100),"nota(s) de R$ 100.00")

let notas50 = valores / 50
valores = valores - (parseInt(notas50) * 50)
console.log(parseInt(notas50),"nota(s) de R$ 50.00")

let notas20 = valores / 20
valores = valores - (parseInt(notas20) * 20)
console.log(parseInt(notas20),"nota(s) de R$ 20.00")

let notas10 = valores / 10
valores = valores - (parseInt(notas10) * 10)
console.log(parseInt(notas10),"nota(s) de R$ 10.00")

let notas05 = valores / 5
valores = valores - (parseInt(notas05) * 5)
console.log(parseInt(notas05),"nota(s) de R$ 5.00")

let notas02 = valores / 2
valores = valores - (parseInt(notas02) * 2)
console.log(parseInt(notas02),"nota(s) de R$ 2.00")

console.log("MOEDAS:")

let moedas100 = valores / 1
valores = valores - (parseInt(moedas100))
console.log(parseInt(moedas100),"moeda(s) de R$ 1.00")

let moedas50 = valores / 0.5
valores = valores - (parseInt(moedas50) * 0.5)
console.log(parseInt(moedas50),"moeda(s) de R$ 0.50")

let moedas25 = valores / 0.25
valores = valores - (parseInt(moedas25) * 0.25)
console.log(parseInt(moedas25),"moeda(s) de R$ 0.25")

let moedas10 = valores / 0.10
valores = valores - (parseInt(moedas10) * 0.10)
console.log(parseInt(moedas10),"moeda(s) de R$ 0.10")

let moedas05 = valores / 0.05
valores = valores - (parseInt(moedas05) * 0.05)
console.log(parseInt(moedas05),"moeda(s) de R$ 0.05")

let moedas01 = valores / 0.01
valores = valores - (parseInt(moedas01) * 0.01)
console.log(parseInt(moedas01),"moeda(s) de R$ 0.01")