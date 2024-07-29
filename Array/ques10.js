var createTargetArray = function(nums, index) {
    var result = [];

    for(var i = 0;i< nums.length ; i++){

        // console.log(nums[i], index[i]);
        // console.log('..mm.',result[index[i]]);
        // if(!result[index[i]] && result[index[i]] !== 0){
        //     console.log('....',result[index[i]]);
        //     result[index[i]] = nums[i];
        // }else{
        //     console.log('......');
            result.splice(index[i], 0, nums[i]);
        // }
       
    }
    return result;
};


// console.log(createTargetArray([0,1,2,3,4], [0,1,2,2,1]));
console.log(createTargetArray([0,1,0], [0,1,0]));

// Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
// Output: [0,4,1,3,2]