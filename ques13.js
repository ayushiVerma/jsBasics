// // Two Pointer

// /**
//  * @param {number[]} numbers
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(numbers, target) {
//     let left = 0;
//     let right = numbers.length - 1;
//     let resArr = [];

// // 
//     while(left < right){
//         let leftIndex = left + 1;
//         let rightIndex = right - 1;
//         let result = numbers[left] + numbers[right];
      
//         if( result === target){
//             resArr.push(left+1,right + 1);
//             return resArr;
//         }
//         if( result < target){
//             left++;
//         }else if(result > target){
//             right--;
//         }

       
//     }
//     return (-1);
// }


// // console.log(twoSum([2,7,11,15], 9));
// console.log(twoSum([-1, 0], -1));

// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var moveZeroes = function(nums) {
//     let index = 0;
//     let pointer = nums.length - 1;
//     //  let res = [];
//     for(var i = 0;  i < nums.length; i ++){
//          if(nums[i] === 0){
//              console.log('pointer',pointer);
//              nums[pointer] = nums[i];
//              pointer--;
//          }else{
//             //  console.log('here', i, index, nums[i]);
//             //  // console.log('index', index);
//             //  nums[index] = nums[i];
//             //  index++;
//          }
//     }
 
//      console.log('>>>',nums);
//     // return res;
//  };
// var moveZeroes = function(nums) {
//     let i = 0;  // Pointer to track the position of the next non-zero element

//     for (let j = 0; j < nums.length; j++) {
//         if (nums[j] !== 0) {
//             [nums[i], nums[j]] = [nums[j], nums[i]];  // Swap using array destructuring
//             i++;
//         }
//     }
// }


//  console.log(moveZeroes([0,1,0,3,12]));

// var isSubsequence = function(s, t) {
   
//     let left = 0;
//     let right = 0;

//     str = t.split('');
//     subStr = s.split('');

//     let res = [];
//     for(var i = 0; i < str.length; i++){
//        if(str[left] === subStr[right]){
//         // res.push(subStr[right]);
//         left++;
//         right++;
//        }else{
//         left++;
//        }

     
//     }

//     console.log(s.length);
//     console.log(right);

//     if(right === s.length){
//         return true;
//     }else return false
// };

// s = "abc";
// t = "ahbgdc"
// console.log(isSubsequence(s,t))



/**
 * @param {number[]} height
 * @return {number}
 */
// var maxArea = function(height) {
//     let left = 0;
//    let area = [];

//    for(var i = 0; i < height.length ; i ++){
//        let current = height[i];
//        left++;

//        for(var j = 1; j < height.length; j++){
//            let m = j - i;
//            let possibleArea = Math.abs(Math.min(current, height[j]) * m);
//            area.push(possibleArea);
//        }

//    }
//    area = area.sort((a, b) => (b - a));

//    return area[0];
// };

// var maxArea = function(height) {
//     let left = 0;
//    let area = [];
//    let right = height.length;

// //    for(var i = 0; i < right ; i ++){
//     //    let current = height[i];
//     //    left++;

//        while(left < right){
//         console.log(left, right)
//         // let m = j - i;

//         // let possibleArea = Math.abs(Math.min(current, height[j]) * m);
//         // area.push(possibleArea);
//        }

//     //    for(var j = 1; j < height.length; j++){
//     //        let m = j - i;
//     //        let possibleArea = Math.abs(Math.min(current, height[j]) * m);
//     //        area.push(possibleArea);
//     //    }

// //    }
//    area = area.sort((a, b) => (b - a));

//    return area[0];
// };

// console.log(maxArea([1,8,6,2,5,4,8,3,7]));


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    
    let sum = 0;
    let w = 3;
    let res = 0;

    // Get first sum
    for(var i = 0; i < w ; i++){
        sum = sum + nums[i];
        res = sum;
    }
    console.log('>>>',sum);
    for( i = w; i < nums.length; i++){
        console.log(nums[i]);
        sum = sum + nums[i] - nums[i - w];
        console.log('NewSum',sum, res);
        console.log(sum - target);
        console.log(res - target);
     
        if(Math.abs(sum - target) < Math.abs(res - target)){
            res = sum;
        }
        
    }

    console.log('Res', res);
    return res;

};

// console.log(threeSumClosest([1,1,1,0], -100));
console.log(threeSumClosest([-1,2,1,-4], 1));