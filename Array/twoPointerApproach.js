// Two pointers is really an easy and effective technique that is typically used for searching pairs in a sorted array.
// Given a sorted array A (sorted in ascending order), having N integers, find if there exists any pair of elements 
// (A[i], A[j]) such that their sum is equal to X.

// Illustration : 

// A[] = {10, 20, 35, 50, 75, 80}
// X = =70
// i = 0
// j = 5
// A[i] + A[j] = 10 + 80 = 90
// Since A[i] + A[j] > X, j--
// i = 0
// j = 4
// A[i] + A[j] = 10 + 75 = 85
// Since A[i] + A[j] > X, j--
// i = 0
// j = 3
// A[i] + A[j] = 10 + 50 = 60
// Since A[i] + A[j] < X, i++
// i = 1
// j = 3
// m
// A[i] + A[j] = 20 + 50 = 70
// Thus this signifies that Pair is Found.


function isPairSum(A, N, X) {
    console.log(A);
    let k = N - 1;
    for (var i = 0; i < N - 1; i++) {
        let j = i;
       

        console.log(A[j], A[k], j, k);
        if (A[j] + A[k] < X) {
            j++;
        }
        if (A[j] + A[k] > X) {
            k--;
        }
        if (A[j] + A[k] === X) {
            return {j,k}
            console.log('wollaa', j, k, A[j] + A[k]);
        }

    }

}

const arr = [2, 3, 5, 8, 9, 10, 11];
const val = 17;
const arrSize = arr.length;

// array should be sorted before using the two-pointer technique
arr.sort((a, b) => a - b);

// Function call
console.log(isPairSum(arr, arrSize, val));