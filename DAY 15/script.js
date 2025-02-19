// 01

// let age = parseInt(prompt('Enter your age'))

// if(age<18){
//     console.log('You are a minor')
// } else if(age >=18  && age < 60){
//     console.log('You are an adult')
// } else{
//     console.log('You are a senior citizen')
// }

// 02 ++++++++++++++++++++++++++++++

// let num1 = parseInt(prompt('Enter no. 1'))
// let num2 = parseInt(prompt('Enter no. 1'))

// let sum = num1 + num2
// if (sum%2===0) {
//     console.log('Even Sum')
// } else {
//     console.log('Odd Sum')
// }

// 03 ++++++++++++++++++++++++++++++++

// let letter = parseInt(prompt('Enter a letter'))


// 04 ++++++++++++++++++++++++++++++++

// let num1 = parseInt(prompt('Enter no. 1'))
// let num2 = parseInt(prompt('Enter no. 2'))
// let num3 = parseInt(prompt('Enter no. 3'))

// if(num1>=num2 && num1>=num3){
//     console.log("largest Number: ",num1)
// } else if (num2>=num1 && num2>=num3){
//     console.log("largest Number: ",num2)
// }else{
//     console.log("largest Number: ",num3)
// }


// 05 ++++++++++++++++++++++++++++++++

// let year = parseInt(prompt('Enter a Year'))

// if (year%4===0) {
//     console.log('Leap Year')
// }else{
//     console.log('Non Leap Year')
// }

// 06 ++++++++++++++++++++++++++++++++

// let num1 = parseFloat(prompt('Enter no. 1'))
// let num2 = parseFloat(prompt('Enter no. 2'))
// let operator = prompt('Enter a operator(+,-,*,/)')


// let operation;

// if (operator === '+') {
//     operation = num1 + num2;
// } else if (operator === '-') {
//     operation = num1 - num2;
// } else if (operator === '*') {
//     operation = num1 * num2;
// } else if (operator === '/') {
//         operation = num1 / num2;
// } else {
//     operation = "Invalid operator!";
// }

// console.log(`Result: ${operation}`);

// 07 ++++++++++++++++++++++++++++++++

// let num = parseInt(prompt('Enter a number'))

// if (num>0) {
//     console.log('Positive')
// } else if(num <0) {
//     console.log('Negative')
// }else{
//     console.log('Zero')
// }


// 08 ++++++++++++++++++++++++++++++++

// let username = prompt('Enter your name')
// let time = prompt('Enter current time(24-hour format)')

// if (time>=5 && time<=12) {
//     console.log('Good Morning',username)
// } else if (time>12 && time<17) {
//     console.log('Good Afternoon',username)
// } else if (time>=17 && time<21) {
//     console.log('Good Evening',username)
// } else  {
//     console.log('Good night',username)
// } 


// 09 ++++++++++++++++++++++++++++++++

// let lightColor = prompt('Enter Traffic light color(red,yellow,green)').toLowerCase

// if (lightColor === 'red') {
//     console.log('Stop!')
// }else if (lightColor === 'yellow') {
//     console.log('Get Ready!')
// }else if (lightColor === 'green') {
//     console.log('Go!')
// }else{
//     console.log('Invalid Color')
// }


// 10 ++++++++++++++++++++++++++++++++

// let table = parseInt(prompt('Enter a number'))

// for (let i = 1; i <= 10; i++) {
//     console.log(table*i)
// }


// 11 ++++++++++++++++++++++++++++++++

// let userMarks = parseFloat(prompt('Enter marks'))

// if (userMarks>=90 && userMarks <= 100) {
//     console.log('A')
// } else if (userMarks>=80 && userMarks < 90) {
//     console.log('B')
// } else if (userMarks>=70 && userMarks < 80) {
//     console.log('C')
// }
// else if (userMarks>=60 && userMarks < 70) {
//     console.log('D')
// }
// else if (userMarks<60 && userMarks >0) {
//     console.log('F')
// } else{
//     console.log('Invalid Marks')
// }


// 12 ++++++++++++++++++++++++++++++++

// let username = 'mns'
// let password = 'pass'

// let entername = prompt('Enter Username')
// let enterpass = prompt('Enter Password')

// if (username == entername) {
//     console.log("Login Successful")
// } else {
//     console.log("Incorrect username of password")
// }


// 13 ++++++++++++++++++++++++++++++++

// let num1 = parseFloat(prompt('Enter Number 1'))
// let num2 = parseFloat(prompt('Enter Number 2'))

// num1 = num1 + num2

// num2 = num1 - num2

// num1 = num1 - num2

// console.log('Number 1',num1)
// console.log('Number 2',num2)


// 14 ++++++++++++++++++++++++++++++++

// let num = parseInt(prompt('Enter a number'))

// if (num%3 === 0 && num%5 ===0) {
//     console.log('FizzBuzz')
// } else if(num %3 === 0){
//     console.log('Fizz')
// }else if(num %5 === 0){
//     console.log('Buzz')
// }else{
//     console.log(num)
// }


// 15 ++++++++++++++++++++++++++++++++

// let num = 123
// let reversedNum = parseInt(num.toString().split('').reverse().join(''));

// console.log(reversedNum)


// 16 ++++++++++++++++++++++++++++++++

let num = 123
let numStr = num.toString()

for (let i = 1; i <= numStr.length; i++) {
    console.log(num)
}

