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