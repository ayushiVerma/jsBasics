/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    
    let result = [];
    for(var i = 0;i<nums.length; i++){

        let count = 0;
        let p = nums[i];

        for(var j = 0;j<nums.length; j++){

            if(p > nums[j]){
                count++;
            }

            
        }
        result.push(count);
    }

    console.log(result);
    return result;
};


console.log(smallerNumbersThanCurrent([8,1,2,2,3]));