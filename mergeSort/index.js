//Merge Sort Example 1
//Write a function that takes in an array and sorts it smallest to largest using merge sort.

// Solution 1 - Time: O(n^2)

function merge(arr1, arr2){
  let results = [];
  let i = 0;
  let j = 0;
  while(i < arr1.length && j < arr2.length){
    if(arr2[j] > arr1[i]){
      results.push(arr1[i]);
        i++;
    } else {
      results.push(arr2[j])
        j++;
    }
  }
  while(i < arr1.length) {
    results.push(arr1[i])
      i++;
  }
  while(j < arr2.length) {
    results.push(arr2[j])
      j++;
  }
  return results;
}

// Recursive Merge Sort
function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
