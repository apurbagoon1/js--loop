/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/

// Subtask-1:
let sumOdd = 0;
let i = 81;
while (i <= 131) {
    if (i % 2 !== 0) {
        sumOdd += i;
    }
    i++;
}
console.log('Sum of odd numbers from 81 to 131:', sumOdd);


// Subtask-2:
let sumEven = 0;
let n = 206;
while (n <= 311) {
    if (n % 2 === 0) {
        sumEven += n;
    }
    n++;
}
console.log('Sum of even numbers from 206 to 311:', sumEven);

