const fs = require('fs');

// object to hold the digits 
const digits = {
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9',
};


function part1(filename) {

    let total = 0;

    let data = fs.readFileSync(filename, 'utf-8');

    // split the data into each line 
    let lines = data.trim().split('\n');

    let values = lines.map((line) => {
        let value = '';
        let first = line.split('').find((v) => !Number.isNaN(Number(v)))
        let last = line.split('').findLast((v) => !Number.isNaN(Number(v)))
        return Number(first + last)
    });

    const calVal = values.reduce(
        (acc, curr) => acc + curr,
        0,
    );
    return values;
}
// part1('./example2.txt')

function replaceSpelledNumbers(line) {
       const digitsMap = {
        'one': '1',
        'two': '2',
        'three': '3',
        'four': '4',
        'five': '5',
        'six': '6',
        'seven': '7',
        'eight': '8',
        'nine': '9',
    };

    // Iterate over each word in the line
    return line.split(/(\W+)/).map(word => {
        // Replace the word with a digit if it's in the digitsMap
        return digitsMap[word] ? digitsMap[word] : word;
    }).join('');

}

// function that takes a file and parses strings to numbers 
function part2(filename) {
    let total = 0;

    let data = fs.readFileSync(filename, 'utf-8');
    let lines = data.trim().split('\n');

    lines.forEach(line => {
        // Replace spelled-out numbers with digits
        let processedLine = replaceSpelledNumbers(line);

        // Debugging: Log the processed line
        console.log(`Processed Line: ${processedLine}`);

        // Find the first and last digit
        let first = processedLine.split('').find(char => !isNaN(char) && char !== ' ');
        let last = processedLine.split('').reverse().find(char => !isNaN(char) && char !== ' ');



        // Calculate and accumulate the calibration value
        if (first !== undefined && last !== undefined) {
            total += Number(first + last);
        }
    });

    console.log(total);
}

part2('./example2.txt')