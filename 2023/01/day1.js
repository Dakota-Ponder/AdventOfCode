const fs = require('fs');

function calcCalibrationVal(filename) {

    let total = 0;

    const nums = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
    
    };

    let data = fs.readFileSync(filename, 'utf-8');

    // split the data into each line 
    let line = data.split('\n');

    // loop through each line and 
}