

// Fibonacci Series || Linear Time complexity : Big-O is O(n)
var fibb = function(num){
   const arr = [0, 1];
    for(var i = 2; i < num; i++){
        arr[i] = arr[i-1] + arr[i-2];
    }

    return arr;
   
}

// console.log(fibb(7));


// Factorial of an integer; Complexity : O(n) i.e Linear 
var factorial = function(n){
    let res = 1;

    for(let i = 2; i<= n; i++){
        res = res * i;
    }
    return res;

}

// console.log(factorial(4));
// console.log(factorial(1));


// Complexity : Linear : O(n)
var isPrime = function(n){
    if(n < 2){
        return false
    }
    // for(var i = 2 ; i < n; i++){
    //     for(var j = i; j< n; j++){
    //         if(i*j === n){
    //             return false;
    //         }
    //     }
    // }
    for(var i =2; i< n; i++){
        if(n%i === 0){
            return false;
        }
    }
    return true;
}

// console.log(isPrime(11));

// -----------------------------------------------------
// Big-O is O(log n) i.e while loop means linear
//  but we also have n/2 means it is not directly propotional to n
var isPowerOfTwo = function(n){
   if(n < 1){
    return false;
   }
   while(n > 1){
    if(n%2 !== 0){
        return false;
    }
    n = n/2;
   }
   return true;
}

// console.log(isPowerOfTwo(8)) //true
// console.log(isPowerOfTwo(0)) //false
// console.log(isPowerOfTwo(1)) //true
// console.log(isPowerOfTwo(5)) //false


// Big-O is O(1) i.e Constant Complexity :: Highly Optimized solution
var isPowerOfTwoBitwise = function(n){
    if(n < 1){
        return false;
    }

    return (n & (n-1)) === 0;
}

// console.log(isPowerOfTwoBitwise(8)) //true
// console.log(isPowerOfTwoBitwise(0)) //false
// console.log(isPowerOfTwoBitwise(1)) //true
// console.log(isPowerOfTwoBitwise(5)) //false