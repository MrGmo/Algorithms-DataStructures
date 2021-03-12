// Sliding Window Approach
// Write a function called max SubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

// function subArraySum(arr, num){
//   let maxSum = 0
//   let tempSum = 0
//
//   if(num > arr.length){
//     return null;
//   }
//
//   for(let i = 0; i < num; i++){
//     maxSum += arr[i]
//   }
//
//   tempSum = maxSum
//   for(let j = num; j < arr.length; j++){
//     tempSum = tempSum - arr[j - num] + arr[j]
//     maxSum = Math.max(maxSum, tempSum)
//   }
//     return maxSum
// }
//
// console.log(subArraySum([1, 2, 5, 2, 8, 1, 4], 4))


// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.


// function countUniqueValues(arr){
//   let count = 0
//
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] !== arr[i+1]){
//       count++
//     }
//   }
//   return count
// }
//
// console.log(countUniqueValues([1, 2, 3, 3, 3, 3, 3, 3]))


// Use the multiple pointer method
// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.


// function sumZero(arr){
//   let left = 0;
//   let right = arr.length - 1
//
//   while(left < right){
//     let sum = arr[left] + arr[right];
//     if(sum === 0){
//       return [arr[left], arr[right]];
//     }else if(sum > 0){
//       right--
//     }else{
//       left++
//     }
//   }
// }


// Solution 1
// function sumZero(arr){
//   for(let i = 0; i < arr.length; i++){
//     for(let j = i+1; j < arr.length; j++){
//       if(arr[i] + arr[j] === 0){
//         return [arr[i], arr[j]]
//       }
//     }
//   }
// }

// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]))


// Find the unique number in the array using the frequency counter method.

// function findOdd(arr){
//   let numCount = {}
//
//   for(let i = 0; i < arr.length; i++){
//     if(numCount[arr[i]]){
//       numCount[arr[i]]++
//     }else{
//       numCount[arr[i]] = 1
//     }
//   }
//   for(let num in numCount){
//     if(numCount[num] === 1){
//       return num
//     }
//   }
// }
//
// console.log(findOdd([3,3,3,2,2,1,2]))



// Frequency Counter Example 2
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another. Such as cinema, formed from iceman.



// Solution 2: Solve using frequency counter method
// function anagram(str1, str2){
//   if(str1.length !== str2.length){
//     return false;
//   }
//
//   const obj = {}
//
//   for(let i = 0; i < str1.length; i++){
//     let letter = str1[i]
//     obj[letter] ? obj[letter] += 1 : obj[letter] = 1
//   }
//   for(let j = 0; j < str2.length; j++){
//     let letter = str2[j]
//     if(!obj[letter]){
//       return false;
//     }else{
//       obj[letter] += 1
//     }
//   }
//     return true;
// }


// Solution 1
// function anagram(a, b){
//   let str1 = a.split('').sort((a, b) => {
//     if(a > b){
//       return 1
//     }else if(b > a){
//       return -1
//     }else{
//       return 0
//     }
//   }).join('')
//   let str2 = b.split('').sort((a, b) => {
//     if(a > b){
//       return 1
//     }else if(b > a){
//       return -1
//     }else{
//       return 0
//     }
//   }).join('')
//   return str1 === str2
// }

// console.log(anagram('racecar', 'carrace'))


// Frequency Counter Example 1
// Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.


// function same(arr1, arr2){
//   let arr3 = arr1.map(x => x**2)
//   return arr2.every(elem => arr3.includes(elem))
// }
//
// console.log(same([1,2,3,4], [1, 16, 9, 4]))


// Write a function which take in a string and returns counts of each character in the string.

// function charCount(str){
//   str = str.replace(/[^a-z0-9]/gi, '').toLowerCase()
//   let obj = {}
//
//   for(let char of str){
//     if(obj[char] > 0){
//       obj[char]++
//     }else{
//       obj[char] = 1
//     }
//   }
//   return obj
// }
//
// console.log(charCount('HHHHHHHHHHHHi therrhhhhhhhhhrreee!!!****_____eeee'))


// A Timing Example * there's also space complexity, same notation
// Write a function that calculates the sum of all nubmers from 1 up to (and including) some number n.

// Soution 1
// function addTwo(n){
//   let sum = 0
//   for(let i = 0; i <= n; i++){
//     sum+=i
//   }
//   return sum
// }

// *Much Faster
// Solution 2
// function addTwo(n){
//   return n * (n + 1)/ 2
// }
//
// let t1 = performance.now();
// addTwo(1000000000);
// let t2 = performance.now()
//
// console.log(`Time Elapsed: ${(t2-t1)/1000} seconds.`)
