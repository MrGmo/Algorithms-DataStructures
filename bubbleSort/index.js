//Bubble Sort Example 1
//Write a function that takes in an array and sorts it smallest to largest using a bubble sort. Use the naive approach for this challenge.

// Solution 1 - Time: O(n^2)

function bubbleSort(arr) {
  let noSwamps;
  for (let i = 0; i < arr.length; i++) {
    noSwamps = true;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
        noSwaps = false
      }
    }
    if (noSwamps) {
      break;
    }
  }
  return arr
}

