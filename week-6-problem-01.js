/**
What will be the GCD?

Problem Statement
Write a program where you have to find the GCD(Greatest Common Divisor) of two numbers.

Input
The input consists of two integer numbers.

Output
The output will be an integer number.

Constraints
0 ≤ |S| ≤ 109
Example:
Enter two numbers.

Input:
9 12
Output:
3
 */

/*

input a = 9




divisor list of a upto 9 

for loop till that number,example 9

a%2===0 

the divisible returns will go into an array

input b = 12

*/
const input = "5 15";

const inputArray = input.split(" ");

const [a, b] = inputArray;

// for a divisor array:
const divisorListOfA = [];
for (let i = 1; i <= a; i++) {
   if (a % i === 0) {
      divisorListOfA.push(i);
   }
}

// for b divisor array:
const divisorListOfB = [];
for (let i = 1; i <= b; i++) {
   if (b % i === 0) {
      divisorListOfB.push(i);
   }
}

const commonDivisors = [];
divisorListOfA.forEach((item) => {
   if (divisorListOfB.includes(item)) {
      commonDivisors.push(item);
   }
});

const GCD = Math.max(...commonDivisors);
console.log(GCD);
