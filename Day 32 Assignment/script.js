//? 1. Description: An ISBN (International Standard Book Number) is a unique 10-digit number assigned to books. The ISBN is valid if the sum of its digits, each multiplied by its position (I to IO), is divisible by II.

let num = '0471958697'

let sum =0;
for (let i = 10; i >= 1; i--) {
    let lastNum = parseInt(num[num.length - 1])
    sum += lastNum*i
    num = num.slice(0, -1)
}
if (sum%11===0) {
    console.log('Valid ISBN number');
    
} else {
    console.log('Invalid Number');
}

//? 2. Description: The Highest Common Factor (HCF) or Greatest Common Divisor (GOD) of two numbers is the largest number that divides both numbers without leaving a remainder.