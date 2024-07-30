var twoSum = function (num, target) {
  let resultArr = [];
  
  for(var i = 0; i < num.length ; i++){
    let currentValue = num[i];

    for(var j = i+1; j< num.length ; j++){
      if(currentValue + num[j] === target){
        resultArr.push([i,j]);
      }
    }
  }

  return resultArr;
};

const t = twoSum([1, 2, 3, 4,5], 6);
console.log(t);

// var a = [7,2,11,22,13]
// let t = a.shift();
// console.log(a);
// console.log(t);




