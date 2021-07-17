// Recursion Example 1
//Write a function called power which accepts a base and exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents.

// Solution 1

function power(base, exp){
  if (exp === 0) {
    return 1
  }
  return power(base, exp-1) * base
}

// Recursion Example 2
// Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it.

Solution 1

function factorial(num) {
  if (num < 0) {
      return 0
  }
  if (num <= 1) {
    return 1
  }
  return factorial(num-1) * num
}

// Recursion Example 3
//Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

// Solution 1

function productOfArray(arr) {
  if (arr.length === 0) {
      return 1
  }
  return productOfArray(arr.slice(1)) * arr[0]
}


//Recursion Example 4
//Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function.

// Solution 1

function recursiveRange(num) {
  if (num === 0) {
    return 0
  }
  return recursiveRange(num-1) + num
}


// Recursion Example 5
//Write a recursive function called fib which accepts a number and returns the nth number in the fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the suem of the previous two numbers.

// Solution 1

function fib(num) {
  if (num <= 2) {
    return 1
  }
  return fib(num-1) + fib(num-2)
}


// Bonus Challenging Recursion Problems
// Challenge Recursion Problem 1
//Write a recursive function called reverse which accepts a string and returns a new string in reverse.

// Solution 1

function reverse(str) {
  if (str.length <= 1) {
    return str
  }
  return reverse(str.slice(1)) + str[0]
}


// Challenge Recursion Problem 2
//Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome. Otherwise it returns false. 

// Solution 1

