// 1287. Element Appearing More Than 25% In Sorted Array
// Easy
// Topics
// Companies
// Hint
// Given an integer array sorted in non-decreasing order, there is exactly one integer in the array that occurs more than 25% of the time, return that integer.

 

// Example 1:

// Input: arr = [1,2,2,6,6,6,6,7,10]
// Output: 6
// Example 2:

// Input: arr = [1,1]
// Output: 1
var findSpecialInteger = function(arr) {
    const targetFrequency = arr.length / 4;
    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i];
        let count = 1;
    
        // Count the frequency of the current element
        while (arr[i + 1] === currentElement) {
        count++;
        i++;
        }
    
        // Check if the frequency exceeds 25%
        if (count > targetFrequency) {
        return currentElement;
        }
    }
    
    // If no special integer is found
    return null;

};

// console.log(findSpecialInteger([1,2,2,6,6,6,6,7,10]))
// console.log(findSpecialInteger([1,1,2,2,3,3,3,3]))
console.log(findSpecialInteger([1,1,2,2,3,3,3,3]))