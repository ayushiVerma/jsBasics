// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

 

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// var findMedianSortedArrays = function(nums1, nums2) {
//     const t = nums1.concat(nums2).sort((a,b) => {
//         return a-b;
//     });

//     if(t.length % 2 === 0){
//         const l = t.length / 2; 
//         const res = t[l-1]+t[l];
//         return res/2;
//     }else{
//         const l = parseInt(t.length / 2);
//         return t[l];
//     }
// };


var findMedianSortedArrays = function(nums1, nums2) {
    const array = nums1.concat(nums2).sort((a,b) => {
        return a-b;
    });

    const half = Math.floor(array.length/2);

    if(array.length % 2 === 0){
        return (array[half-1]+array[half])/2;
    }else {
        return array[half];
    }
};

console.log(findMedianSortedArrays([1,2], [3,4]));
console.log(findMedianSortedArrays([1,3], [2]));


// 5

// 2.5