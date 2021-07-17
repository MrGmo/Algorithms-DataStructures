//Sliding Window Appraoch Example 1
//Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

// Solution 1 - Time: O(n^2)

function maxSubarraySum(arr, num) {
  if (arr.length < num) {
    return null
  }
  let max = -Infinity
  for (let i = 0; i < arr.length-num+1; i++) {
    let temp = 0
    for (let j = 0; j < num; j++) {
      temp += arr[i+j]
    }
    if (temp > max) {
      max = temp
    }
  }
  return max
}


// Solution 2 - Time: O(n)

function maxSubarraySum(arr, num) {
  let maxSum = 0
  let tempSum = 0

  if (arr.length < num) {
    return null
  }

  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }

  tempSum = maxSum

  for (let j = num; j < arr.length; j++) {
    tempSum = tempSum - arr[j-num] + arr[j]
    maxSum = Math.max(maxSum, tempSum)
  }
  return maxSum
}


//Sliding Window Appraoch Example 2
//Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer. This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed on the function. If there isn't one, return 0 instead.

// Solution 1

function minSubArrayLen(arr, sum) {
  let total = 0
  let start = 0
  let end = 0
  let minLen = Infinity

  while (start < arr.length) {
    if (total < sum && end < arr.length) {
      total += arr[end]
      end++
    } else if (total >= sum ) {
      minLen = Math.min(minLen, end-start)
      total -= arr[start]
      start++
    } else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen
}


//Sliding Window Appraoch Example 3
//Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distict characters.

// Solution 1 - Time: O(n)

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }
  return longest;
}