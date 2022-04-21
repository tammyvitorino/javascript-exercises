// Read an integer value, which is the duration in seconds of a certain event in a factory, and inform it expressed in hours:minutes:seconds.

// Input
// The input file contains an integer N.

// Output
// Print the read time in the input file (seconds) converted in hours:minutes:seconds.

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n')

let seconds = lines.shift()

let minutes = seconds / 60
let hours = parseInt(minutes / 60)
minutes = parseInt((seconds - (hours * 3600)) / 60)
seconds = seconds - (hours * 3600) - (minutes * 60)

console.log(hours+":"+minutes+":"+seconds)