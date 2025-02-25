// CONTINUE: Skips rest of the code for this iteration
let n = 0;
while (n < 20) {
    n++;
    if (n % 4 !== 0) { // Skips numbers that are not divisible by 4
        continue;
    }
    console.log('Divisible by 4:', n);
}
