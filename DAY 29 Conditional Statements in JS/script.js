//* Assignment
//? 1. You need to write a program where the user inputs an amount in Indian rupees, and the program should output the number of currnecy notes required to make up that amount using the largest denominations first

let amount = 10327;
let twok = 0,
  fiveh = 0,
  twoh = 0,
  oneh = 0,
  fifty = 0,
  twenty = 0,
  ten = 0,
  five = 0,
  two = 0,
  one = 0;

if (amount >= 2000) {
  while (amount >= 2000) {
    amount -= 2000;
    twok++;
  }
}
if (amount >= 500) {
  while (amount >= 500) {
    amount -= 500;
    fiveh++;
  }
}
if (amount >= 200) {
  while (amount >= 200) {
    amount -= 200;
    twoh++;
  }
}
if (amount >= 100) {
  while (amount >= 100) {
    amount -= 100;
    oneh++;
  }
}
if (amount >= 50) {
  while (amount >= 50) {
    amount -= 50;
    fifty++;
  }
}
if (amount >= 20) {
  while (amount >= 20) {
    amount -= 20;
    twenty++;
  }
}
if (amount >= 10) {
  while (amount >= 10) {
    amount -= 10;
    ten++;
  }
}
if (amount >= 5) {
  while (amount >= 5) {
    amount -= 5;
    five++;
  }
}
if (amount >= 2) {
  while (amount >= 2) {
    amount -= 2;
    two++;
  }
}
if (amount >= 1) {
  while (amount >= 1) {
    amount -= 1;
    one++;
  }
}
console.log(
  `2000x${twok}, 500x${fiveh}, 200x${twoh}, 100x${oneh}, 50x${fifty}, 20x${twenty}, 10x${ten}, 5x${five}, 2x${two}, 1x${one}`
);

//? 2.write a program to accept rating of the movie as double and movie name as String.

// let rating=0.9
// let movie = 'RRR';

// if(rating>0.0 && rating<=2.0){
//     console.log(`${movie} is a Flop`);

// }else if (rating>2.1 && rating<=3.4) {
//     console.log(`${movie} is a Semi Hit`);
// }else if (rating>3.5 && rating<=4.5) {
//     console.log(`${movie} is a Hit`);
// }else if (rating>4.6 && rating<=5) {
//     console.log(`${movie} is a Super Hit`);
// }else{
//     console.log('invalid rating');

// }
