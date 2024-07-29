
// var leftRightDifference = function (nums) {

//    let res = []
//     let lSum = 0;
//     let rSum = 0;

//     const sum = nums.reduce((num, i)=> num += i, 0);
   
//     nums.map((num) => {
//         rSum = sum - num - lSum;
//         res.push(Math.abs(rSum - lSum));
//         lSum = lSum + num;
        
        
//     });
//     return res;

// };

// // var leftRightDifference = function(nums) {
// //     leftSumArr = [];
// //     rightSumArr = [];
// //     result = [];

// //     for(var i = 0; i< nums.length; i++){

// //         if(i == 0){
// //             leftSumArr[i] = 0;
// //         }
// //         if(i == nums.length - 1){
// //             rightSumArr[i] = 0;
// //         }

// //         let sum = 0;
// //         for(var j = 0; j< i; j++){
// //             sum = sum + nums[j];
// //             leftSumArr[i] = sum;
// //         }
// //         let sum1 = 0
// //         for(var k = i+1; k< nums.length; k++){
// //             sum1 = sum1 + nums[k];
// //             rightSumArr[i] = sum1;
// //         }

// //        result[i] = Math.abs(leftSumArr[i] - rightSumArr[i]);

// //     }
// //     return result;

// // };

// // var leftRightDifference = function (nums) {
// //     const arr = []
// //     const sum = nums.reduce((sum, num) => sum += num, 0);

// //     console.log(sum);
// //     let sumLeft = 0
// //     let sumRight = 0
// //     nums.map(num => {
// //         sumRight = sum - num - sumLeft
// //         arr.push(Math.abs(sumRight - sumLeft))
// //         sumLeft += num
// //     })
// //     return arr
// // };


// console.log(leftRightDifference([10,4,8,3]));


// var numIdenticalPairs = function(nums) {
//     let resArr = [];
//     let count = 0;
//     console.log(nums.length);
//     for(var i = 0; i<nums.length; i++){
//          console.log(i);
//         for(var j = i+1; j<nums.length; j++){

               
//             if(nums[i] === nums[j]){
               
//                 count++;
//             }

//         }
//     }
//     console.log(count);
//     return count;
// };

// console.log(numIdenticalPairs( [1,2,3,1,1,3]));

// var luckyNumbers  = function(matrix) {
   
//     let rows = matrix.length;
//     let cols = matrix[0].length;

//     let maxArr = [];
//     let maxResArr = []

//     for(let i = 0 ; i < rows ; i++){
//         // console.log(matrix[i]);

//         temp = []
//         for (let j = 0; j < cols; j++) {
//             console.log('i>>>>',i,matrix[j][i]);
//             temp.push(matrix[j][i]);
//             maxArr[i]= temp;
            
//         }

//         console.log('maxArr',maxArr);

//         maxResArr = Math.max(...maxArr);

//         console.log(maxResArr);
//     }

// };

var luckyNumbers  = function(matrix){

    let rows = matrix.length;
    let cols = matrix[0].length;    

    const rowMin = new Array(rows).fill(Number.MAX_SAFE_INTEGER);
    const colMax = new Array(cols).fill(Number.MIN_SAFE_INTEGER);

    let luckyNumbers = [];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] < rowMin[i]) {
                rowMin[i] = matrix[i][j];
            }
        }
    }

    for(var j = 0 ; j < cols ; j++){
        for (let i = 0; i < rows; i++) {
           if(matrix[i][j] > colMax[j]){
               colMax[j] = matrix[i][j];
           }
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {

            if(matrix[i][j] === rowMin[i] && matrix[i][j] === colMax[j]){
                luckyNumbers.push(matrix[i][j]);
            }

        }
    }

    return luckyNumbers;

}


console.log(luckyNumbers([[3,7,8],[9,11,13],[15,16,17]]));