// https://www.freecodecamp.org/news/javascript-debounce-example/

// https://www.geeksforgeeks.org/debouncing-in-javascript/?ref=header_search


let counter = 0;
fetchData = () => {
    console.log('fetcing data', counter++);
}

function debounceFunction(fn, d){
   let timer;
    return function(){
        let context = this;
        args = arguments;
        clearTimeout(timer)
         timer =  setTimeout(() => {
            fn.apply(context, args);
        }, d);
    }
}

const debounceCall =  debounceFunction(fetchData, 500);


// Throttling
// https://www.geeksforgeeks.org/javascript-throttling/?ref=header_search