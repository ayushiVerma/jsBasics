// https://www.javatpoint.com/currying-in-javascript




// let sumTotal = function(a){
//     return  function(b){
//         if(b){
//             return sumTotal(a+b);
//         }
//         else{
//             return a;
//         }
        
//     }
// }

// function sumTotal(a){
//     return  function(b){
//         if(b){
//             return sumTotal(a+b);
//         }else{
//             return a;
//         }
//     }
// }

sumTotal = (a) => {
    return (b) => {
        return  b ?  sumTotal(a+b) : a;
        if(b){
            return sumTotal(a+b);
        }else{
            return a;
        }
    }
}

console.log(sumTotal(2)(3)(4)(1)());

