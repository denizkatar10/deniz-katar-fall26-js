//----------------------------------
// LESSON 2 LOOPS AND ARRAYS
//----------------------------------

// # JavaScript Loops and Arrays
// This is the coding assignment for the second week of the Intro to Programming course from Code the Dream. The concepts touched on in this assignment include:
//  - Simplify Repetitive Tasks with Loops
//  - Working with ‘for’ Loops
//  - Understanding Arrays

// In this assignment you will write your own code. Your instructions are listed as "comments", meaning the instructions are grayed out and start with '//' at the beginning of the line of code. Put your answers immediately below the instructions for each question. As mentioned in the Welcome to week 2 information to the right, you'll need to use console logs for all the questions to check your code output. Using a function in a console.log is very similar to how you were using them with variables last week. To invoke/call the function use the syntax:

// console.log("Q#: ", functionName(anyInput))

// Note: If a question says ‘return’, your function should use return. If it says ‘print’, use console.log.” Test your functions with several different inputs to make sure they work in all cases.


// ---------- QUESTION 1 ----------
// Write a function called 'repeat' that takes 1 integer parameter and, using a for or while loop, prints out the string "Hello World!" to the console the same number of times as the parameter. Place your console.log inside the function so the message prints during each loop iteration. NOTE: for this question, since your console log should be inside your function, you only need to call/invoke the function after you write it rather than call/invoke it inside of a console.log.

// EXAMPLE "LOG":
//  repeat(3);
// EXAMPLE OUTPUT:
//  Hello World!
//  Hello World!
//  Hello World!

function repeat(number) {
  for (let i = 0; i < number; i++) {
    console.log("Q1." + (i + 1) + " Hello World!");
  }
}

repeat(3);

// ---------- QUESTION 2 ----------
// Write a function called 'pyramidCounting' that takes 1 integer parameter and returns the sum of all of the numbers between 0 and the parameter. Your loop should include the parameter value itself (e.g., if the input is 4, include 4 in the sum.

// EXAMPLE LOG:
//  console.log("Q2: ", pyramidCounting(4));
// EXAMPLE OUTPUT:
//  Q2: 10
// The mathematical explanation of this is 0+1+2+3+4 = 10.

function pyramidCounting(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log("Q2: ", pyramidCounting(4));

// ---------- QUESTION 3 ----------
// Write a function called 'noVowels' that take a string parameter and removes vowels from that string using a loop. Assume the input will be lowercase, but bonus if you handle uppercase too.

// EXAMPLE LOG:
//  console.log("Q3: ", noVowels("adventurous"));
// EXAMPLE OUTPUT:
//  Q3: dvntrs

function noVowels(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "a" && str[i] !== "e" && str[i] !== "i" && str[i] !== "o" && str[i] !== "u") {
      result += str[i];
    }
  }
  return result;
}

console.log("Q3: ", noVowels("adventurous"));

// ---------- QUESTION 4 ----------
// Write a function called 'vowelCount' that takes 1 string parameter and returns the number of vowels in that string. Your function should count both uppercase and lowercase vowels.

// EXAMPLE LOG:
//  console.log("Q4: ", vowelCount('I love to code.'));
// EXAMPLE OUTPUT:
//  Q4: 6

function vowelCount(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u" ||
        str[i] === "A" || str[i] === "E" || str[i] === "I" || str[i] === "O" || str[i] === "U") {
      count++;
    }
  }
  return count;
}

console.log("Q4: ", vowelCount('I love to code.'));

// ---------- QUESTION 5 ----------
// Write a function called 'numOfOdds' that takes 1 integer parameter and returns the number of odd numbers between 0 and that number, including the number itself if it's odd. (Hint: Use the modulo operator)

// EXAMPLE LOG:
//  console.log("Q5: ", numOfOdds(15));
// EXAMPLE OUTPUT:
//  Q5: 8
// The numbers being counted are 1, 3, 5, 7, 9, 11, 13, 15 - that's 8 odd numbers, including 15 itself.

function numOfOdds(n) {
  let count = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 !== 0) {
      count++;
    }
  }
  return count;
}

console.log("Q5: ", numOfOdds(15));

// ---------- QUESTION 6 ----------
// Create two variables named 'empty' and 'full'. Assign an empty array to the 'empty' variable and any array of strings or numbers to the 'full' variable. Write a function called 'arrayChecker' that returns true if the array passed as a parameter is empty and false if not. Check both the 'empty' and 'full' variables to make sure they are returning the expected values. Return the boolean values true or false (not strings)

// EXAMPLE LOGS:
//  console.log("Q6 empty: ", arrayChecker(empty));
//  console.log("Q6 not empty: ", arrayChecker(full));
// EXAMPLE OUTPUTS:
//  Q6 empty: true
//  Q6 not empty: false

let empty = [];
let full = ["dream", 19, "code", 24, 180];

function arrayChecker(arr) {
  return arr.length === 0;
}

console.log("Q6 empty: ", arrayChecker(empty));
console.log("Q6 not empty: ", arrayChecker(full));

// ---------- QUESTION 7 ----------
// Write a function called 'getElementAt' that takes an array parameter and an integer parameter. The function should return the element in the array at the given number index or 'null' if it doesn't exist. If the index is out of range, return null (not undefined). Use your 'full' variable from Question 6 to test.

// EXAMPLE LOGS:
//  console.log("Q7: ", getElementAt(full, 2));
//  console.log("Q7: ", getElementAt(full, 7));

// EXAMPLE OUTPUT: (if the array assigned to variable 'full' is ["dream", 19, "code", 24, 180])
//  Q7: code
//  Q7: null

function getElementAt(arr, index) {
  if (index < 0 || index >= arr.length) {
    return null;
  }
  return arr[index];
}

console.log("Q7: ", getElementAt(full, 2));
console.log("Q7: ", getElementAt(full, 7));

// ---------- QUESTION 8 ----------
// Write a function called 'insertInArray' that takes an array parameter, makes a NEW array with the value '0' inserted at the second position in the NEW array. The function should return the NEW array. Do not modify the original array — see slice hint. Use your 'full' variable from Question 6 to test. NOTE: Assigning an array to a new variable does not make a copy, it's another reference to the same array. Hint: To make a copy you can use the slice() method as in this example:
// let newArray = originalArray.slice()
// LEARNING MOMENT: Also console log the variable 'full' to compare the new array to the original.

// EXAMPLE LOG:
//  console.log("Q8: ", insertInArray(full));
//  console.log("original array: ", full);

// EXAMPLE OUTPUT: (if the array assigned to variable 'full' is ["dream", 19, "code", 24, 180])
//  Q8: ["dream", 0, 19, "code", 24, 180]
//  original array: ["dream", 19, "code", 24, 180]

function insertInArray(arr) {
  let newArray = arr.slice();
  newArray.splice(1, 0, 0);
  return newArray;
}

console.log("Q8: ", insertInArray(full));
console.log("original array: ", full);

// ---------- QUESTION 9 ----------
// Write a function called 'compareArrays' that takes two Array parameters (containing numbers or strings only) and returns true if they are equal, false if not.  The purpose of this function should be to look at each element of the two arrays and compare them, returning false when they either hit two items that don't match, or returning false if the two arrays themselves are different lengths. You can test this with the 'empty' and 'full' variables from Question 6, and/or you can create a variable called 'compare' and assign it an array identical to 'full' to compare those. To further test your function's accuracy, create a new variable called 'part' that is a partial copy of the 'full' variable and test that as well. Hint: First check whether the arrays are the same length. If not, return false immediately.

// REMEMBER: In JavaScript, 1 === '1' is false, but 1 == '1' is true. You'll need to use the triple equals operator which is more strict because it compares data type.

// EXAMPLE LOG:
//  console.log("Q9 same: ", compareArrays(full, compare));
// EXAMPLE OUTPUT: (if both arrays assigned to variable 'full' and 'compare' are ["dream", 19, "code", 24])
//  Q9 same: true

// EXAMPLE LOG:
//  console.log("Q9 different: ", compareArrays(full, empty));
// EXAMPLE OUTPUT: (if using variables from Question 6)
//  Q9 different: false

// EXAMPLE LOG:
//  console.log("Q9 partial: ", compareArrays(full, part));
// EXAMPLE OUTPUT: (if 'full' variable is ["dream", 19, "code", 24] and if 'part' variable is ["dream", 19, "code"])
//  Q9 partial: false

let part = ["dream", 19, "code"];

function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

console.log("Q9 different: ", compareArrays(full, empty))
console.log("Q9 partial: ", compareArrays(full, part))
console.log("Q9 same: ", compareArrays(full, full))

// ---------- QUESTION 10 ----------
// Create a variable called 'numbers' and assign it an array with at least 3 numbers as elements (example: [10, 3, 4]). Write a function called 'calculateTotal' that takes one array parameter and loops through the array in order to return the sum of all the array elements. Hint: Start your total at 0 before looping

// EXAMPLE LOG:
//  console.log("Q10: ", calculateTotal(numbers));

// EXAMPLE OUTPUT: (if the array assigned to variable 'numbers' is [3, 4, 2 ,8])
//  Q10: 17

let numbers = [3, 4, 2];

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log("Q10: ", calculateTotal(numbers));

// ---------- QUESTION 11 ----------
// Write two functions called 'findEvens' and 'findOdds' that each take one array parameter and each function returns a NEW Array of only the even or odd numbers as indicated. NOTE: Assigning an array to a new variable does not make a copy, it's another reference to the same array. To make a copy you can use the slice() method as in this example:
// let newArray = originalArray.slice()

// EXAMPLE LOG:
//  console.log("Q11 evens: ", findEvens([10,2,3,19,7,6,93]));
//  console.log("Q11 odds: ", findOdds([10,2,3,19,7,6,93]));

// EXAMPLE OUTPUT:
//  Q11 evens: [10,2,6]
//  Q11 odds: [3,19,7,93]

function findEvens(arr) {
  let evens = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens.push(arr[i]);
    }
  }
  return evens;
}

function findOdds(arr) {
  let odds = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      odds.push(arr[i]);
    }
  }
  return odds;
}

// ---------- QUESTION 12 ----------
// Write a function called 'makeSquares' that takes one array parameter and returns a NEW Array with the squared values of each of the numbers. NOTE: Assigning an array to a new variable does not make a copy, it's another reference to the same array. To make a copy you can use the slice() method as in this example:
// let newArray = originalArray.slice()

// EXAMPLE LOG:
//  console.log("Q12: ", makeSquares([2,5,8]));
// EXAMPLE OUTPUT:
//  Q12: [4,25,64]

function makeSquares(arr) {
  let squared = [];
  for (let i = 0; i < arr.length; i++) {
    squared.push(arr[i] * arr[i]);
  }
  return squared;
}

// ---------- QUESTION 13 ----------
// Write a function called 'displaySkills' that takes an array of string values that correspond to skills that you have.
// Iterate through the array and display each skill. This function should print each skill, not return anything.

// EXAMPLE CALL:
//  const skills = ["JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub"];
//  displaySkills(skills);
// EXAMPLE OUTPUT:
//  Javascript
//  HTML
//  CSS
//  Adobe Photoshop
//  GitHub

function displaySkills(skills) {
  for (let i = 0; i < skills.length; i++) {
    console.log(skills[i]);
  }
}

// ---------- QUESTION 14 ----------
// In the early 2000s, this was a famous technical interview question: 
// Write a function called 'fizzBuzz' that takes NO parameters. 
// - The function will loop from 1 to 15 and return an array of numbers. 
// - While looping, the function will check if the current value in the loop is divisible by 3, by 5, or by both.
// - If the current value in the loop is divisible by 3, the function will add the string "fizz" to an array.
// - If the current value in the loop is divisible by 5, the function will add the string "buzz" to the array.
// - If the current value in the loop is divisible by both, the function will add the value "fizzbuzz" to the array.
// - If the number isn't divisible by 3, 5, OR both, it will add the number to the array.
// The function will return the array of values.
// Hint: Check for ‘divisible by both 3 and 5’ first, before checking each individually

// EXAMPLE LOG:
//  console.log("Q14: ", fizzBuzz());
// EXAMPLE OUTPUT:
//  Q14: [1,2,'fizz',4,'buzz','fizz',7,8,'fizz','buzz',11,'fizz',13,14,'fizzbuzz']

function fizzBuzz() {
  let result = [];
  for (let i = 1; i <= 15; i++) {
    if (i % 15 === 0) {
      result.push("fizzbuzz");
    } else if (i % 3 === 0) {
      result.push("fizz");
    } else if (i % 5 === 0) {
      result.push("buzz");
    } else {
      result.push(i);
    }
  }
  return result;
}

console.log("Q14: ", fizzBuzz());

// ---------- QUESTION 15 ----------
// Write a function called testScope that shows the difference between global, function and block scope.
// Create 3 variables - 
//  let globalVar = "globarVar";
//  let functionVar = "functionVar";
//  let blockVar = "blockVar";
// Place the variables correctly in your code (think about where each one needs to be declared
// so its name matches its scope) and log them from within the scope where they're accessible.
// Also, place 2 log statements for the functionVar and blockVar that are commented out, but
// would result in an error if uncommented - because the variable they are referencing is out
// of scope at that point in the code.

// There is no single example output for this question - the "right answer" is the structure of
// your code itself, including the two commented-out lines that demonstrate scope errors.


let globalVar = "globarVar";

function testScope() {
  console.log(globalVar);

  function innerFunction() {
    let functionVar = "functionVar";
    console.log(functionVar);

    {
      let blockVar = "blockVar";
      console.log(blockVar);
    }

    // console.log(blockVar); // Error: blockVar is out of scope
  }

  innerFunction();

  // console.log(functionVar); // Error: functionVar is out of scope
}

testScope();


// ---------- GITHUB TASK ----------
// This week, you cloned the new GitHub repository from week 1. 
// Confirm that you followed the GitHub cloning instructions in the lesson portion. There is no code or a link to submit for this section.