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