// 5. Longest Palindromic Substring
// Medium
// Topics
// Companies
// Hint
// Given a string s, return the longest 
// palindromic
 
// substring
//  in s.
 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
 

// Constraints:

// 1 <= s.length <= 1000
// // s consist of only digits and English letters.

/**
 * @param {string}
 * @return {string}
 */
var longestPalindrome = function(s) {
    let l = s.length;
    let res = [];
    for(var i = 0 ;i< l ; i++){
        for(j = i+1; j< l ; j++){
            res.push(s.split('').slice(i,j+1).join(''))
        }
    }

    let pal = []
    for(let i = 0; i< res.length; i++){
        if(res[i] === res[i].split('').reverse().join('')){
            pal.push(res[i]);
        }
    }
console.log(pal)
    return pal[pal.length-1];
};

// console.log(longestPalindrome('babad'))
console.log(longestPalindrome('ac'))