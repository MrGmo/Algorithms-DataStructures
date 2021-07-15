// Frequency Counter Example 1
// Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

// Solution 1 - Time : O(n^2)
function same(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false
  }

  for(let i = 0; i < arr1.length; i++){
    let correctIndex = arr2.indexOf(arr1[i]**2)
    if(correctIndex === -1){
      return false
    }
    arr2.splice(correctIndex, 1)
  }
  return true
}


// Solution 2 - Time: O(n)
function same(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false
  }
  let obj1 = {}
  let obj2 ={}

  for(let x of arr1){
    obj1[x] > 0 ? obj1[x]++ : obj1[x] = 1
  }

  for(let x of arr2){
    obj2[x] > 0 ? obj2[x]++ : obj2[x] = 1
  }

  for(let x in obj1){
    if(!(x**2 in obj2)){
      return false
    }
    if(obj2[x**2] !== obj1[x]){
      return false
    }
  }
  return true
}


// Solution 3 - Time: O(n)

function same(a1, a2) {
  if (a1.length !== a2.length) {
    return false
  }

  let obj = {}

  for (let num of a2) {
    obj[num] > 0 ? obj[num]++ : obj[num] = 1
  }

  for (let num of a1) {
    obj[num**2] > 0 ? obj[num**2] += -1 : null
  }

  return Object.values(obj).reduce((a,b) => a+b,0) === 0
}


// Frequency Counter Example 2
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another. Such as cinema, formed from iceman.

// Solution 1 - Time: O(n)

function validAnagram(str1, str2){
  if(str1.length !== str2.length){
    return false
  }
  const obj = {}

  for(let x of str1){
    obj[x] > 0 ? obj[x]++ : obj[x] = 1
  }

  for(let x of str2){
    if(!obj[x]){
      return false
    }
      obj[x]-=1
  }
  return true
} 


// Solution 2 - Time: O(n)

function validAnagram(s1, s2) {
  if (s1.length !== s2.length) {
    return false
  }

  let obj = {}

  for (let char of s1) {
    obj[char] > 0 ? obj[char]++ : obj[char] = 1
  }

  for (let char of s2) {
    obj[char] > 0 ? obj[char] += -1 : null
  }

  let sum = Object.values(obj).reduce((a, b) => a+b, 0)
  return sum === 0
}

// Frequency Counter Example 3
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Solution 1 - Time: O(n)

function sameFrequency(n1, n2) {
  n1 = n1.toString()
  n2 = n2.toString()

  if (n1.length !== n2.length) {
    return false
  }

  let obj = {}

  for (let char of n1) {
    obj[char] > 0 ? obj[char]++ : obj[char] = 1
  }

  for (let char of n2) {
    obj[char] > 0 ? obj[char]-- : obj[char] = 1
  }

  let sum = Object.values(obj).reduce((a,b)=> a+b, 0)
  return sum === 0
}

// Frequency Counter Example 4
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.

function areThereDuplicates(...args) {
  let obj = {}

  for (let char of args) {
    obj[char] > 0 ? obj[char]++ : obj[char] = 1
  }
  return Math.max(...Object.values(obj)) > 1
}