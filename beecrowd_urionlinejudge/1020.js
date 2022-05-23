// Read an integer value corresponding to a person's age (in days) and print it in years, months and days, followed by its respective message “ano(s)”, “mes(es)”, “dia(s)”.

// Note: only to facilitate the calculation, consider the whole year with 365 days and 30 days every month. In the cases of test there will never be a situation that allows 12 months and some days, like 360, 363 or 364. This is just an exercise for the purpose of testing simple mathematical reasoning.

// Input
// The input file contains 1 integer value.

// Output
// For example, for the input 400, print the output, like:
// 1 ano(s)
// 1 mes(es)
// 5 dia(s)

// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');

let life = lines.shift()

let anos = parseInt(life/365)
let meses = parseInt((life-(365*anos))/30)
let dias = life-(365*anos)-(30*meses)

console.log(anos+" ano(s)\n"+meses+" mes(es)\n"+dias+" dia(s)")
