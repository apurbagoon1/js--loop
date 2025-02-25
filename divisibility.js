// FOR LOOP to find numbers between 1 to 40 that are divisible by 6
for (let i = 1; i <= 40; i++) {
    if (i % 6 === 0) {
        console.log('Divisible by 6:', i);
    }
}

// FOR LOOP to find numbers from 1 to 50 that are divisible by both 4 and 7
for (let i = 1; i <= 50; i++) {
    if (i % 4 === 0 && i % 7 === 0) {
        console.log('Divisible by 4 & 7:', i);
    }
}

// FOR LOOP to calculate the sum of numbers from 1 to 30 that are divisible by 4
let total = 0;
for (let i = 1; i <= 30; i++) {
    if (i % 4 === 0) {
        console.log(i);
        total += i;
    }
}
console.log('Total of numbers divisible by 4:', total);
