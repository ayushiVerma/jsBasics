// // TWO POINTER
// __28. Find the Index of the First Occurrence in a String
// Easy
// Topics
// Companies
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.
 

// Constraints:

// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // console.log(haystack.includes(needle));
    let haystackLength = haystack.length;
    let needleLength = needle.length;

    const parts = Math.ceil(haystackLength / needleLength);
    console.log(parts)
    let partsArr = [] 
    // console.log(parts);
    for(var i = 0; i < parts; i++){
        let t = (parts*i)+(parts-1);
        console.log(i*parts,t+1 );
        partsArr.push(haystack.slice(i*parts,t+1 ))
    }

    console.log(partsArr);
    for(var j = 0 ; j< partsArr.length; j++){
        if(needle === partsArr[j]){
            return j;
        }
    }

    return -1;
};

// console.log(strStr('sadbutsad', 'sad'))
console.log(strStr('leetcode', 'leeto'))