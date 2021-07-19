//Selection Sort Example 1
//Write a function that takes in an array and sorts it smallest to largest using a selection sort.

// Solution 1 - Time: O(n^2)

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j
      }
    }
    if (i !== lowest) {
      let temp = arr[i]
      arr[i] = arr[lowest]
      arr[lowest] = temp
    }
  }
  return arr
}