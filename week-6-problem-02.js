/* 
Is the number Prime?

Problem Statement
Write a program where you will be given a number. You will have to check whether the number is prime or not.

Input
The input consists of an integer numbers.

Output
The output will print whether the number is prime or not. For example, for 13 it will print "13 is a prime number." for 24 it will print "24 is not a prime number."

Constraints
0 ≤ |S| ≤ 109
Example:
Enter number.

Input:
13
Output:
13 is a prime number.
*/

/*

A prime number is a number that can only be divided by itself and 1 without remainders. What are the prime numbers from 1 to 100? The prime numbers from 1 to 100 are: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97.

*/

const input = "0";

const inputNumber = Number(input);

let result = "";
function isPrime() {
   if (inputNumber === 2) {
      result = `${inputNumber} is a prime number.`;
      return result;
   } else if (inputNumber === 1 || inputNumber === 0) {
      result = `${inputNumber} is not a prime number.`;
      return result;
   } else {
      for (let i = 2; i < inputNumber; i++) {
         if (inputNumber % i === 0) {
            return (result = `${inputNumber} is not a prime number.`);
         }
      }
      return (result = `${inputNumber} is a prime number.`);
   }
}

console.log(isPrime());
