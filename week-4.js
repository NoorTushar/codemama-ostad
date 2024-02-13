/**
 * Problem Statement
Write a program to check if there is a vowel in a string.

Input
The input consists of a string.

Output
Output will be the answer whether there is a vowel or not. If there is vowel it will print "The string contains a vowel.", otherwise it will print "The string does not contain any vowel."

Constraints
The program will terminate whenever it finds a vowel.
 */

// let input = "hello";
// const vowels = ["a", "e", "i", "o", "u"];

// let sentence = input;

// sentence = sentence.toLowerCase();

// let result = "";
// for (let letter of sentence) {
//    if (vowels.includes(letter)) {
//       result = `The string contains a vowel.`;
//       break;
//    } else {
//       result = `The string does not contain any vowel`;
//    }
// }

// console.log(result);

/**
 * Find Next Number

Problem Statement
Write a program where you will be given three numbers. You will have to find the next number.

Input
The input consists of three integer numbers.

Output
The output will be an integer number.

Example:
Enter three numbers.

Input:
3 5 7
Output:
9
 */

// let input = "7 5 3";

// const numbers = input.split(" ");

// const number1 = Number(numbers[0]);
// const number2 = Number(numbers[1]);

// const difference = number2 - number1;

// const nextNumber = Number(numbers[numbers.length - 1]) + difference;

// console.log(nextNumber);

/**
 * BMI Calculator
বাং

Problem Statement
Write a program where user will give height(height) and weight(kg) and then BMI will be calculated.

Input
The input consists of two double numbers which are height(meter) and weight(kg).

Output
*if bmi < 18.5 print "Underweight" *if bmi >= 18.5 & bmi < 25.0 print "Normal weight" *if bmi >= 25.0 & bmi < 30.0 print "Overweight" *else print "Obese"

Constraints
0 ≤ |S| ≤ 109
Example:
Enter height and weight.

Input:
1.6 60
Output:
BMI: 23.44
Normal weight
 */

let input = "1.6 60";
const variables = input.split(" ");

const height = parseFloat(variables[0]);
const weight = parseFloat(variables[1]);

const bmi = (weight / Math.pow(height, 2)).toFixed(2);

let statement = "";

if (bmi < 18.5) {
   statement = "Underweight";
} else if (bmi >= 18.5 && bmi < 25.0) {
   statement = "Normal weight";
} else if ((bmi >= 25.0) & (bmi < 30.0)) {
   statement = "Overweight";
} else {
   statement = "Obese";
}

console.log(`BMI: ${bmi}
${statement}
`);
