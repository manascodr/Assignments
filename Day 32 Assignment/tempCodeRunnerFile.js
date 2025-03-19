let N = 4;
N = N * 2
a = 0
b = 1
let evenSum = 0;

for(let i = 0; i <=N; i++){

    if (i % 2 === 0) {
        evenSum += a; 
    }

    let  next = a + b 
    a = b
    b = next
}
console.log(evenSum);