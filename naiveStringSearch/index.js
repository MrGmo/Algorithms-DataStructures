//Naive String Search Example 1
//Write a function that finds the number of times a substring appears in a longer string.

// Solution 1

function naiveSearch(long, short) {
  let count = 0
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i+j]) {
        break
      }
      if (j === short.length-1) {
        count++
      }
    }
  }
  return count
}