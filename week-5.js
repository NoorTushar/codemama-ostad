/**
 * Problem-1
 * 
 * 
 * 
 * 
 * Problem-2:
 * Reverse the Number

Problem Statement
Write a program where user will give a number. You will reverse the number and print it.

Input
The input consists of an integer number.

Output
The output will be the reverse of the integer number.

Input:
1234
Output:
4321
 */

let input = "0031";

let array = input.split("");
let reversedInputArray = "";

for (let i = array.length - 1; i >= 0; i--) {
   const element = array[i];
   console.log(typeof element);
   reversedInputArray += element;
}

console.log(reversedInputArray);

function sumOfElementsLessThanMedian(size, arr) {
   //
   arr.sort((a, b) => a - b);

   let median;
   if (size % 2 === 0) {
      median = (arr[size / 2 - 1] + arr[size / 2]) / 2;
   } else {
      median = arr[Math.floor(size / 2)];
   }

   let sum = 0;
   for (let i = 0; i < size; i++) {
      if (arr[i] < median) {
         sum += arr[i];
      } else {
         break;
      }
   }
   return sum;
}

const size = parseInt(prompt("Enter the size of the array:"));
const elements = prompt("Enter the elements of the array separated by spaces:")
   .split(" ")
   .map(Number);

const result = sumOfElementsLessThanMedian(size, elements);
console.log("Sum of elements less than median:", result);
