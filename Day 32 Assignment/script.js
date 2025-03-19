//? 1. Description: An ISBN (International Standard Book Number) is a unique 10-digit number assigned to books. The ISBN is valid if the sum of its digits, each multiplied by its position (I to IO), is divisible by II.

// let num = '0471958697'

// let sum =0;
// for (let i = 10; i >= 1; i--) {
//     let lastNum = parseInt(num[num.length - 1])
//     sum += lastNum*i
//     num = num.slice(0, -1)
// }
// if (sum%11===0) {
//     console.log('Valid ISBN number');
    
// } else {
//     console.log('Invalid Number');
// }

//? 2. Description: The Highest Common Factor (HCF) or Greatest Common Divisor (GOD) of two numbers is the largest number that divides both numbers without leaving a remainder.

// let a = 48, b = 18;

// while (b!==0) {
//   let rem = a % b
//     a = b
//     b = rem
// }

// console.log(a);

//? 3. Description: A number is a Harshad number if it is divisible by the sum of its digits

// let num = 18;
// let sum = 0;

// while(num>0){
//   let  rem = num % 10
//     sum = sum+rem
//     num = Math.floor(num/10)
// }
// if (num%sum === 0) {
//     console.log('Harshad Number');
    
// } else{
//     console.log('Non Harshad Numeber');
    
// }

//? 4. Description: A number is a perfect square if it is the square of an integer.

// let num = 25;

// if (Number.isInteger(Math.sqrt(num))) {
//     console.log("Perfect square");
// } else {
//     console.log("Not a perfect square");
// }

//? 5. Description: A number is abundant if the sum of its proper divisors is greater than the number itself

// let num = 12
// let sum=0

// for (let i = 1; i <= num/2; i++) {
//     if (num%i===0) {
//         sum = sum+i  
//     }
    
// }

// if (sum>num) {
//     console.log('Abundant Number');
// }else {
//     console.log('Not an Abundant Number');
// }

//? 6. Description: Print Fibonacci series up to N terms using a loop.

// let N = 14;
// let a = 0, b = 1;

// for (let i = 0; i < N; i++) {
//     console.log(a);
//     let next = a + b;
//     a = b;
//     b = next;
// }


//? 7. Description: Find numbers that have exactly X divisors

//? 8. Description: Find all prime factors of a number.

//? 9. Description: find the area of a circle, rectangle, or triangle using switch.

// let shape = prompt('Enter a shape Circle, Rectangle, or Triangle').toLowerCase()

// switch (shape) {
//     case 'circle':
//         let r = Number(prompt('Enter Radius'))
//         console.log(`Area of Circle ${Math.PI*r*r}`);
//         break;
//     case 'rectangle':
//         let l = Number(prompt('Enter Length'))
//         let w = Number(prompt('Enter Width'))
//         console.log(`Area of Rectangle ${l*w}`);
//         break;
//     case 'triangle':
//         let b = Number(prompt('Enter Base'))
//         let h = Number(prompt('Enter Height'))
//         console.log(`Area of Triangle ${(1/2)*b*h}`);
//         break;

//     default: console.log('Enter a Valid Shape');
    
//         break;
// }

//? 10. Description: A number where the sum of digits of its square equals the number

// let num = 2
// let numCopy = num
// let sum = 0;
// let square = num * num

// while (square>0) {
//     let rem = square % 10;
//     sum = sum + rem
//     square = Math.floor(square / 10)
// }

// if (sum===numCopy) {
//     console.log('Neon Number');
    
// } else {
//     console.log('Non Neon Number');
// }

//? 11. Description: Find the sum of Fibonacci numbers at even indices up to the 2Nth fibonacci number.

// let N = 4;
// N = N * 2
// a = 0
// b = 1
// let evenSum = 0;

// for(let i = 0; i <=N; i++){

//     if (i % 2 === 0) {
//         evenSum += a; 
//     }

//     let  next = a + b 
//     a = b
//     b = next
// }
// console.log(evenSum);

//? 12. Description: find the largest digit in a given number.

// let num = 2356742
// let largeNum = 0;

// while(num>0){
//     let rem = num%10
//     if (rem>largeNum) {
//         largeNum = rem
//     }
//     num = Math.floor(num/10)
// }
// console.log(`Largest Number is: ${largeNum}`);

//? 13. Description: Find the Least Common Multiple (LCM) of two numbers.

// let a = 12 , b = 15
// let acopy =a , bcopy=b

// while (b !== 0) {
//     let temp = b;
//     b = a % b;
//     a = temp;
// }
// console.log(`LCM is: ${(acopy*bcopy)/a}`);

//? 14. Description: Find the sum of all even digits in a given number.

// let num = 23842
// let sum = 0;

// while(num>0){
//     rem = num % 10
//     if (rem%2===0) {
//         sum +=rem
//     }
//     num = Math.floor(num/10)
// }
// console.log(sum);

//? Description: find the number of days in a given month and year (to handle leap years).


// let month = 2;
// let year = 2024;
// let days;

// if (month === 2) {
//      Leap year check
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//         days = 29;
//     } else {
//         days = 28;
//     }
// } else if ([1, 3, 5, 7, 8, 10, 12].includes(month)) {
//     days = 31;
// } else if ([4, 6, 9, 11].includes(month)) {
//     days = 30;
// } else {
//     days = "Invalid Month";
// }

// console.log(days);
