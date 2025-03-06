//? Create a function that takes a callback and executes it after every `n` seconds indefinitely.

// function barbarchalao(func, times) {
//     setInterval(func,times*1000);
// }

// barbarchalao(function() {
//     console.log("hello")
// }, 2)

//? Implement a function that returns a function with a preset greeting (Closure).

// function greetSetup(params) {
//     return function(name) {
//         console.log(`${params} ${name}`);
        
//     }
// }
// let indianGreet = greetSetup('Namaste')
// indianGreet('harsh')
// indianGreet('yogi')
// indianGreet('pogi')

//? Implement a function that takes a callback and only executes it once (HOF + Closure).

// function onlyOnceCall(cb) {
//     let executed = false
//     return function(){
//         if (!executed) {
//             executed = true
//             cb()
//         }
//     }
// }

// let newfunc = onlyOnceCall(function() {
//     console.log("once");
// })
// newfunc()

//? Implement a function that throttles another function (HOF + Closures).

