/*
Gamble with Profit
বাং

Problem Statement
Write a program that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.

Input
The input consists of one float 
�
F and two integer 
�
N, 
�
M numbers

Output
The output will print either "true" or "false"

Constraints
0 ≤ |F| ≤ 1
0 ≤ |N| ≤ 104
0 ≤ |M| ≤ 104
Example:
Enter numbers

Input:
0.2 50 9
Output:
true
*/

const input = "0.2 50 9";

const inputArray = input.split(" ");

const prob = parseFloat(inputArray[0]);
const price = parseInt(inputArray[1]);
const pay = parseInt(inputArray[2]);

if (prob * price > pay) {
   console.log(true);
} else {
   console.log(false);
}
