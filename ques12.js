// var gcdOfStrings = function(str1, str2) {
  
//      let res = ''

//     if(str1+str2 !== str2+str1){
//         return res;
//     }
   

//    res =  str1.slice(0, getGCF(str1.length, str2.length));   
//     return res;
   
// };

// var getGCF = function(num1, num2){
//     const min = Math.min(num1, num2);

//     let hcf = 1;
//     for(var i = 0;i<= min; i++){
//         if(num1%i === 0 && num2 % i === 0){
//             hcf = i;
//         }

//     }

//     return hcf;

// }

// // console.log( gcdOfStrings('abcabcabc', 'abc'));
// console.log(gcdOfStrings('ababab', 'abab'));

// var reverseVowels = function(s) {
//     let t = 'aeiouAEIOU'.split('');
//     let vowelArr = [];
//    arr = s.split('').map((e) => {
//         if(t.includes(e)){vowelArr.push(e)}
//        return t.includes(e) ? '*' : e;
//    });

//    let count = 0;
//    vowelArr = vowelArr.reverse()
//    return arr.map(e => (e === '*' ? vowelArr[count++] : e)).join('');

// };

// /**
//  * @param {string} s
//  * @return {string}
//  */
// var reverseVowels = function(s) {
//     let t1 = 'aeiouAEIOU'.split('');
//        let temp = s.split('');
     
//        arr = [];
//        temp.forEach((e, i) => {
//            if(t1.includes(e)){
//                console.log('>>>', e);
//                arr.push(e);
//                temp[i] = '*';
        
//            }
//        });
   
//        let localCount = 0;
//        arr = arr.reverse();
//        temp.forEach((e, index) => {
//            if(temp[index] === '*'){
//                temp[index] = arr[localCount];
//                localCount++;
//            }
//        });
   
//        return temp.join('');
//    };

// console.log(reverseVowels('IceCreAm'));
// AceCreIm
// IEea

// var reverseWords = function(s) {
//     console.log(s.replace('/ +(?= )/g', ''));
//    const t = s.replace(/ +(?= )/g,'');
//    console.log(t)
//     let str = t.trim().split(' ').reverse().join(' ');
//     console.log(str);
// };

// // console.log(reverseWords("the sky is blue"));
// console.log(reverseWords('a good   example'))

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var productExceptSelf = function(nums) {
//     let res = [];
//     for(var i = 0; i< nums.length; i++){
//         const temp = nums.slice(0, i).concat(nums.slice(i + 1));
//         res.push(Math.abs(getMultify(temp))); 
//     }

//     return res;
// };

// var getMultify = function(arr) {
//    return arr.reduce((acc, e) => acc * e, 1);
// }


// var productExceptSelf = function(nums) {
//     const n = nums.length;
//     const res = Array(n).fill(1);

//     console.log(res, '>>>')

//     // Step 1: Calculate prefix products and store them in `res`
//     let prefix = 1;
//     for (let i = 0; i < n; i++) {
//         res[i] = prefix;
//         prefix *= nums[i];
//     }

//     console.log(res);

//     // Step 2: Calculate suffix products on the fly and combine with prefix
//     let suffix = 1;
//     for (let i = n - 1; i >= 0; i--) {
//         res[i] *= suffix;
//         suffix *= nums[i];
//     }

//     return res;
// };

// console.log(productExceptSelf([1,2,3,4]))
// console.log(productExceptSelf([-1,1,0,-3,3]))

// var increasingTriplet = function(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 1; j < nums.length; j++) {
//             for (let k = 2; k < nums.length; k++) {
                
//                 if(nums[i] < nums[j] && nums[j] < nums[k] && nums[i]< nums[k] && i < j && j < k && i < k){
//                    return true;
//                 }
//             }
        
//         }
        
//     }

//     return false;
// };

// // Greedy algo
// var increasingTriplet = function(nums) {
//     let smallestNo = Infinity;
//     let secondSmallestNo = Infinity;

//     for(num of nums){
//         console.log(num);
//         if(num <= smallestNo){
//             smallestNo = num;
//         }else if(num <= secondSmallestNo ){
//             secondSmallestNo = num;
//         }else{
//             console.log(smallestNo, secondSmallestNo, num)
//             return true;
//         }
//     }

//     return false;
// };



// console.log(increasingTriplet([2,1,5,0,4,6]))

var compress = function(chars) {
    newArr = [];
    let count = 1;
    chars = chars.sort();

    if(chars.length === 1){ return 1;}

    for(var i = 0 ; i < chars.length; i++){
        if(chars[i] === chars[i+1]){
            count++;
        }else{
            if(count === 1){
                newArr.push(chars[i]);
            }else{
                newArr.push(chars[i], count);
            }
           
            count = 1;
        }
    }

    return newArr;
};

console.log(["a","a","b","b","c","c","c"]);
// console.log(compress(["a","a","b","b","c","c","c"]));
console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"]));