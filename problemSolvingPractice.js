// Bonus Challenges

//Write a function that counts how many times a short string is included in a longer string. Return the count number.

// function naiveSearch(long, short){
//   let count = 0
//   for(let i = 0; i < long.length; i++){
//     for(let j = 0; j < short.length; j++){
//       if(short[j] !== long[i+j]) break;
//       if(j === short.length - 1) count++;
//     }
//   }
//   return count
// }
//
// console.log(naiveSearch('omgheyyouomgheyyouomg', 'omg'))


// function binarySearch(arr, num){
//   let start = 0
//   let end = arr.length-1
//   let middle = Math.floor((start + end) / 2)
//
//   while(arr[middle] !== num && start <= end){
//     if(num < arr[middle]) end = middle -1;
//     else start = middle + 1;
//     middle = Math.floor((start + end) / 2)
//   }
//   return arr[middle] === num ? middle : -1;
// }
//
// console.log(binarySearch([2, 5, 6, 9, 13, 15, 28], 13))


// Searching Algorithms
//Write a function called linearSearch which accepts an array and value, and returns the index at which the value exists. If the value does not exist in the array, return -1. Don't use indexOf to implement this function.

// function linearSearch(arr, num){
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] === num){
//       return i
//     }
//   }
//   return -1
// }
//
//
// console.log(linearSearch([1, 2, 3, 4, 5], 4))


//Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

// function capitalizeFirst (arr) {
//   if (arr.length === 1) {
//     return [arr[0][0].toUpperCase() + arr[0].substr(1)];
//   }
//   const res = capitalizeFirst(arr.slice(0, -1));
//   const string = arr.slice(arr.length - 1)[0][0].toUpperCase() + arr.slice(arr.length-1)[0].substr(1);
//   res.push(string);
//   return res;
// }
//
// console.log(capitalizeFirst(['car', 'taco', 'blue']))

// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

// function flatten(arr){
//  let flat = [].concat(...arr)
//  return flat.some(Array.isArray) ? flatten(flat) :  flat
// }
//
// console.log(flatten([1,2,[[3, 3], 4]]))

//Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.


// function someRecursive(arr, callback){
//   if(arr.length === 0) return false;
//   if(callback(arr[0])) return true;
//   return someRecursive(arr.slice(1), callback)
// }
//
//
// console.log(someRecursive([2, 2, 8, 4], x => x % 2 !== 0))


//Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

// function isPalindrome(str){
//   if(str.length === 1) return true;
//   if(str.length === 2) return str[0] === str[1];
//   if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))
//   return false;
// }
// console.log(isPalindrome('racecar'))


//Write a recursive function called reverse which accepts a string and returns a new string in reverse.

// function reverse(str){
//   if(str.length <= 1) return str;
//   return reverse(str.slice(1)) + str[0]
// }
//
// console.log(reverse('hello'))



// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.


// function fib(num){
//   if(num === 1 || num === 2) return 1;
//   return fib(num - 1) + fib(num - 2)
// }
//
// console.log(fib(10))
// should return 55


//Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function.


// function recursiveRange(num){
//   let digit = 0
//   let arr = []
//   while(digit <= num){
//     arr.push(digit)
//     digit++
//   }
//   return arr.reduce((a, b) => a + b, 0)
// }
//
// console.log(recursiveRange(6))



//Write a function that takes in any number and returns the number that it is a factorial of. If the function receives 120, it should return '5!'.

// function reverseFactorial(n) {
//   let i = 1;
//   while(n > 1) n /= ++i;
//   return n === 1 ? i+'!' : 'None';
// }
//
// console.log(reverseFactorial(120))


//Write a function called productOfArray which takes in an array of numbers and return the product of them all.


// function productOfArray(arr){
//   if(arr.length === 0){
//     return 1
//   }
//     return productOfArray(arr.slice(1)) * arr[0]
// }
//
// console.log(productOfArray([1, 2, 3, 10]))


//Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four (4!) is equal to 24, because 4 * 3 * 2 * 1 equals 24. Factorial zero is always one.


// function factorial(num){
//   if(num === 0) return 1;
//   return factorial(num-1) * num
// }
//
//
// console.log(factorial(5))


//Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow(). Don't worry about negative bases or exponents.


// function power(base, ex){
//   if(ex === 0) return 1;
//   return power(base, ex - 1) * base
// }
//
// console.log(power(1, 3))


// Recursive problem with negative numbers
// function factorial(n) {
//   if(n === 0 || n === 1){
//     return 1
//   }else if(n < 0){
//     return n * factorial(n+1)
//   }else{
//     return n * factorial(n-1)
//   }
// }


// Recursive factorial problem
// function factorial(n) {
//   if(n < 0) return null;
//   if(n === 1 || n === 0) return 1;
//   return factorial(n-1) * n
// }


// Sliding window
// Write a function called findLongestSubstring, which accepts a string and returns the length fo the longest substring with all distinct characters.

// function findLongestSubstring(str){
//   let longest = 0;
//   let seen = {};
//   let start = 0;
//
//   for(let i = 0; i < str.length; i++){
//     let char = str[i]
//
//     if(seen[char]){
//       start = Math.max(start, seen[char]);
//     }
//     longest = Math.max(longest, i - start + 1);
//     seen[char] = i + 1;
//   }
//   return longest;
// }
//
//
// console.log(findLongestSubstring('rithmschool'))
// should return 7


// Sliding window - really tough one :(
// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer. This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.


// function minSubArrayLen(nums, sum) {
//   let total = 0;
//   let start = 0;
//   let end = 0;
//   let minLen = Infinity;
//
//   while (start < nums.length) {
//     // if current window doesn't add up to the given sum then
// 		// move the window to right
//     if(total < sum && end < nums.length){
//       total += nums[end];
// 			end++;
//     }
//     // if current window adds up to at least the sum given then
// 		// we can shrink the window
//     else if(total >= sum){
//       minLen = Math.min(minLen, end-start);
// 			total -= nums[start];
// 			start++;
//     }
//     // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
//     else {
//       break;
//     }
//   }
//
//   return minLen === Infinity ? 0 : minLen;
// }
//
// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7))


// Sliding window
// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed ot the function. The elements must be consecutive.

// function maxSubarraySum(arr, num){
//     let maxSum = 0
//     let tempSum = 0
//
//     if(num > arr.length){
//       return null;
//     }
//
//     for(let i = 0; i < num; i++){
//       maxSum += arr[i]
//     }
//
//     tempSum = maxSum
//     for(let j = num; j < arr.length; j++){
//       tempSum = tempSum - arr[j - num] + arr[j]
//       maxSum = Math.max(maxSum, tempSum)
//     }
//       return maxSum
//   }

// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4))
// should return 39


//Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Using a recursive solution
// function isSubsequence(str1, str2){
//   if(str1.length === 0){
//     return true
//   }
//
//   if(str2.length === 0){
//     return false
//   }
//
//   if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))
//    return isSubsequence(str1, str2.slice(1))
// }
//
// console.log(isSubsequence('hello', 'hello world'))


//Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.


// function averagePair(arr, target){
//     let start = 0
//     let end = arr.length - 1
//
//     while(start < end){
//       let avg = (arr[start] + arr[end]) / 2
//       if(avg === target){
//         return true
//       }else if(avg < target){
//         start++
//       }else{
//         end--
//     }
//   }
//       return false
// }
//
// console.log(averagePair([1, 2, 3], 2.5))


// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates amaong the arguments passed in.

// function areThereDuplicates() {
//   return new Set(arguments).size !== arguments.length;
// }

// Frequency counter
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// function sameFrequency(num1, num2){
//   let str1 = String(num1)
//   let str2 = String(num2)
//
//   if(str1.length !== str2.length){
//     return false
//   }
//
//   let countNum1 = {};
//   let countNum2 = {};
//
//   for(let i = 0; i < str1.length; i++){
//     countNum1[str1[i]] = (countNum1[str1[i]] || 0) + 1
//   }
//
//   for(let j = 0; j < str2.length; j++){
//     countNum2[str2[j]] = (countNum2[str2[j]] || 0) + 1
//   }
//
//   for(let key in countNum1){
//     if(countNum1[key] !== countNum2[key]){
//       return false
//     }
//     return true
//   }
// }
//
//
// console.log(sameFrequency(331122, 112233))
// should return true



// Sliding window
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
