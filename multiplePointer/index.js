// Multiple pointers problem Example 1
// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

// Solution 1 - Time: O(n^2)

function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]]
      }
    }
  }
}


// Solution 2 - Time: O(n) - Space: O(1)

function sumZero(arr) {
  let left = 0
  let right = arr.length-1

  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
}


// Multiple pointers problem Example 2
// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// Solution 1 - Time: O(n)

function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0
  }
  let start = 0
  for (let i = 1; i < arr.length; i++) {
    if (arr[start] !== arr[i]) {
      start++
      arr[start] = arr[i]
    }
  }
  return start+1
}


// Multiple pointers problem Example 3
//Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Solution 1 - Time: O(n), Space: O(1)

function averagePair(arr, target) {
  let left = 0
  let right = arr.length-1

  while (left < right) {
    let avg = (arr[left] + arr[right])/2
    if (avg === target) {
      return true
    }
    if (avg > target) {
      right--
    }
    if (avg < target) {
      left++
    }
  }
  return false
}

// Multiple pointers problem Example 4
//Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Solution 1 - Time: O(n), Space: O(1)

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}