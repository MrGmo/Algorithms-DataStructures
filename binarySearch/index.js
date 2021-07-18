//Binary Search Example 1
//Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

// Solution 1 - Time: O(log(n))

function binarySearch(arr,val) {
  let start = 0
  let end = arr.length-1
  let mid = Math.floor((start+end)/2)

  while (arr[mid] !== val && start <= end) {

    if (arr[mid] < val) {
      start = mid + 1
    } else {
      end = mid - 1
    }
    mid = Math.floor((start+end)/2)
  }
  if (arr[mid] === val) {
    return mid
  }
  return -1
}