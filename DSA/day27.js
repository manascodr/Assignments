//! 1. Increment and Decrement Operators

//? Q1
// let i = 11;
// i = i++ + ++i;
// console.log(i); //24

//? Q2
// let a =11,b=22,c;
// c= a + b + a++ + b++ + ++a + ++b;
// console.log('a='+a); //13
// console.log('b='+b); //24
// console.log('c='+c); //103

//? Q3
// let i =0;
// i = i++ - --i + ++i - i--;
// console.log(i); //0

//? Q4
// let b =true;
// b++;
// console.log(b); //2

//! 2 Complex Increment and Decrement operations

//? Q5
// let i = 1 , j= 2, k=3;
// let m=i-- - j-- - k--;
// console.log('i='+i); //0
// console.log('j='+j); //1
// console.log('k='+k); //2
// console.log('m='+m); //-4

//? Q6
let a =1; b=2
console.log(--b - ++a + ++b - --a); //0

//? Q7
// let i = 19, j=29, k;
// k = i-- - i++ + --j - ++j + --j - j-- + ++j - j++;
// console.log('i='+i); //19
// console.log('j='+j); //29
// console.log('k='+k); //0

