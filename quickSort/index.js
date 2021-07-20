//Quick Sort Example 1
//Write a function that takes in an array, start point, end point, and sorts it smallest to largest using quick sort.

// Solution 1 - Time: O(n^2), Space: O(log(n))

function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  //assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr,left=0,right=arr.length -1){
  if(left < right){
    let pivotIndex = pivot(arr, left, right)
      quickSort(arr,left,pivotIndex-1);
      quickSort(arr,pivotIndex+1,right);
    }
  return arr
}