// FOR loop with break statement
for (let i = 1; i < 100; i++) {
    console.log('Counting:', i);
    if (i > 6) { // Breaks the loop when i is greater than 6
        console.log('Breaking the loop at:', i);
        break;
    }
}
console.log('Loop exited successfully!');

// WHILE loop with break statement
let n = 60;
while (n > 30) {
    if (n < 55) {
        console.log('Breaking loop at:', n);
        break;
    }
    console.log(n);
    n--;
}
