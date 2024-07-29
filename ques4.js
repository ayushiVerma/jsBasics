An integer has sequential digits if and only if each digit in the 
number is one more than the previous digit.

Return a sorted list of all the integers in the range [low, high]
 inclusive that have sequential digits.

// Example 1:

// Input: low = 100, high = 300
// Output: [123,234]
// Example 2:

// Input: low = 1000, high = 13000
// Output: [1234,2345,3456,4567,5678,6789,12345]


var sequentialDigits = function (low, high) {

    let maxSequentialDigit = '123456789';

    const arr = [];
    for (let i = 0; i < maxSequentialDigit.length; i++) {
        for (let j = i + 1; j < maxSequentialDigit.length; j++) {
            const seq = parseInt(maxSequentialDigit.substring(i, j + 1));
            if (low <= seq && seq <= high) {
                arr.push(seq);
            }

        }

    }

    const t = arr.sort((a,b) => {
        return a-b;
    })
    console.log(t)
    return arr.sort();
};

console.log(sequentialDigits(1000, 13000));