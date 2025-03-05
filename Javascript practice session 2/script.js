//? 11. Write a for loop to print numbers from 10 to 1 in reverse. 

// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

//? 12. Use a while loop to print multiples of 3 from 3 to 30. 

// let i = 3;
// while(i<=30){
//     console.log(i);
//     i+=3
// }

//? 13. Write a program to calculate the sum of numbers from 1 to 100 using a loop.

// let sum = 0; 

// for (let i = 1; i <= 100; i++) {
//     sum = sum + i; 
// }
// console.log(sum); 


//? 14. Create a nested loop to print a star pattern.



//? 15. Use a for...of loop to iterate over the string "JavaScript"

// let str = "JavaScript"
// for(let i of str){
//     console.log(i);  
// }

//? 16. Remove duplicate values from an array.

// let arr = [1,1,12,21,21,21,21,21,34]
// let arr2 = [...new Set(arr)]
// console.log(arr2);

//? 17. Find the second largest number in an array.

// let arr = [2,3,1,4,5]
// let newarr =arr.sort(function(a,b){
//     return b-a;
// })

// console.log(newarr[1]);

//? 18. Sort an array in descending order.

// let arr = [2,3,1,4,5]
// let newarr =arr.sort(function(a,b){
//     return b-a;
// })

//? 19. Reverse an array without using .reverse().

// let arr = [1,2,3,4,5,6,7,8,8,12,321,32145]
// let arr2 = [];

// for (let i = arr.length-1; i >= 0; i--) {
//     arr2.push(arr[i]); 
// }
// console.log(arr2);

//? 20. Find the most frequent element in an array.

// let arr = [3,4,1,3,4,6,7];
// let obj = {}

// arr.forEach(function(val){
    //     if (obj[val]) {
        //         obj[val]++
        //     } else {
            //         obj[val] = 1
            //     }
            // })
            // console.log(obj);
            

// arr.forEach(function(val){
//     obj[val] ? obj[val]++ : obj[val]=1;
// })
// console.log(obj)