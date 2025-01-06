// nth element in the fibonaci series

// Complexity : O(2^n)
getNthElementInFibo = function(n){
    if(n < 2){
        return n;
    }
    return getNthElementInFibo(n - 1) + getNthElementInFibo(n -2);
}

// console.log(getNthElementInFibo(7));
// 0,1,1,2,3,5,8,13,21

// Factorial of n;

// Complexity: O(n) i.e linear
var getFactorial = function(n){
    if(n === 0){
        return 1;
    }
    n = n * getFactorial(n-1);
    return n;
}

console.log(getFactorial(5));