//? Create a function that takes another function as an argument and calls it after 3 seconds (HOF + Callback).

// function abcd(fn){
//     setInterval(fn,3000)
// }

// abcd(function(){
//     console.log('3 seconds');
    
// })

//? Implement your own version of `.map()` as a higher-order function.

// function mapkicopy(arr, func){
//     let newarr = []
//     for (let i = 0; i < arr.length; i++) {
//         newarr.push(func(arr[i])); 
//     }
//     return newarr;
// }

// let ans = mapkicopy([1,2,3,4,5,6], function (value) {
//     return value + 3
// })

//? Write a function that uses closures to create a counter.

function counter(){
    let count = 0;
    
    return function(){
        count++
        console.log(count);
    }
}

// counter()() //Each time you call counter(), it returns a new instance of the inner function, so the count is reset to 0 within the scope of the new closure.

// let fn = counter()
// fn()

//? Implement a function that limits how many times another function can be called (Closure + HOF).

// function fnLimiter(fn, limit) {
//     let total = 0;
//     return function(){
//         if(total < limit){
//             total++
//             fn()
//         }else{
//             console.error("Limit reached Buy pro for more Limit");
            
//         }
//     }
// }

// let limiter = fnLimiter(function(){
//     console.log('Hey')
// }, 3)

// limiter()
// limiter()
// limiter()
// limiter()