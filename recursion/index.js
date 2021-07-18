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

function isPalindrome(str) {
  if (str.length === 1) {
    return true
  }

  if (str.length === 2) {
    return str[0] === str[1]
  }

  if (str[0] === str.slice(-1)) {
    return isPalindrome(str.slice(1,-1))
  }
  return false
}


// Challenge Recursion Problem 3
//Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.

// Solution 1

function someRecursive(arr, callback){
  if (arr.length === 0) {
    return false
  }

  if (callback(arr[0])) {
    return true
  }
  return someRecursive(arr.slice(1), callback)
}


// Challenge Recursion Problem 4
//Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened. 

// Solution 1

function flatten(oldArr){
  var newArr = []
  	for(var i = 0; i < oldArr.length; i++){
    	if(Array.isArray(oldArr[i])){
      		newArr = newArr.concat(flatten(oldArr[i]))
    	} else {
      		newArr.push(oldArr[i])
    	}
  }
  return newArr;
}


// Challenge Recursion Problem 5
//Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

// Solution 1

function capitalizeFirst(array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase()+array[0].substring(1)];
  }
  let res = capitalizeFirst(array.slice(0, -1));
  res.push(array.slice(array.length-1)[0][0].toUpperCase()+array[array.length-1].substring(1));
  return res;
}


// Challenge Recursion Problem 6
//Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects. 

// Solution 1

function nestedEvenSum(obj) {
  let sum = 0
  for (let key in obj) {
      if (typeof obj[key] === 'object'){
          sum += nestedEvenSum(obj[key]);
      } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
          sum += obj[key];
      }
  }
  return sum;
}


// Challenge Recursion Problem 7
//Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

// Solution 1

function capitalizeWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length-1)[0].toUpperCase());
  return res;
}


// Challenge Recursion Problem 8
//Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this.

// Solution 1

function stringifyNumbers(obj) {
  let newObj = {};
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}