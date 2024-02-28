
// Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.

// Return the sorted string. If there are multiple answers, return any of them.

// Example 1:

// Input: s = "tree"
// Output: "eert"
// Explanation: 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:

// Input: s = "cccaaa"
// Output: "aaaccc"
// Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
// Note that "cacaca" is incorrect, as the same characters must be together.
// Example 3:

// Input: s = "Aabb"
// Output: "bbAa"
// Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.
 
var frequencySort = function(s) {
    
   
    const str = s.split('').sort((a,b )=> {
        return 
    });
    var obj = {};
  
    for(var i = 0; i< str.length; i++){
        const char = str[i];

       if(obj[char] === undefined){
        obj[char] = 1;
       } else{
        ++obj[char];
       }
    }

    let st = '';
    for(var t in obj){
        for( let m = 0; m< obj[t];m++){
            st += t;
        }
    }

    return st;
};

console.log(frequencySort('tree'))
console.log(frequencySort('cccaaa'))
console.log(frequencySort('Aabb'))

// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

// The returned array should be created such that returnedArray[i] = fn(arr[i], i).

// Please solve it without the built-in Array.map method.

 

// Example 1:

// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one. 
// Example 2:

// Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
// Output: [1,3,5]
// Explanation: The function increases each value by the index it resides in.
// Example 3:

// Input: arr = [10,20,30], fn = function constant() { return 42; }
// Output: [42,42,42]
// Explanation: The function always returns 42.


/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
// var map = function(arr, fn) {
//     var newArr = [];
//     for(var i = 0; i< arr.length; i++){
//         newArr[i] = fn(arr[i], i);
//     }

//     return newArr;
// };

var map = (arr, fn) => arr.map(fn);

// const arrInput= [10,20,30];
// const fn = function constant() { return 42; }

const arrInput= [1,2,3];
const fn = function plusI(n, i) { return n + i; }

const ty = map(arrInput, fn);
console.log(ty);
