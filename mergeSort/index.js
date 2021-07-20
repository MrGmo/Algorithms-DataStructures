//Merge Sort Example 1
//Write a function that takes in a pair of array's and sorts them into one larger array.

// Solution 1 - Time: O(n log(n)), Space: O(n)

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
