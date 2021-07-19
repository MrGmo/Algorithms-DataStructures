//Insertion Sort Example 1
//Write a function that takes in an array and sorts it smallest to largest using a Insertion sort.

// Solution 1 - Time: O(n^2)

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i]
    for (let j = i-1; j >= 0 && arr[j] > currentValue; j--) {
      if (arr[j] > currentValue) {
        arr[j+1] = arr[j]
      }
    }
  }
  return arr
}