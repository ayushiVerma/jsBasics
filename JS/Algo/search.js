// Linear Search

var arr = [12,2,34,21,5];
var t = 7;

 
// Complexity: O(n) i.e linear as the size of arr increase
//  the no of times if condition executes also increase
linearSearch = function(arr,t){
    for(var i = 0 ; i < arr.length; i++){
        if(arr[i] === t){
            return i;
        }
    }
    return -1;
}

// console.log(linearSearch(arr, t));


binarySearch = function(arr, t){

}

console.log(binarySearch([-4,1,3,6,7,12,32]))
