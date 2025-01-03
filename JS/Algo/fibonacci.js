

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

console.log(isPrime(11));