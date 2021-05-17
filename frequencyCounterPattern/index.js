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

console.log(same([1, 2, 3], [1, 4, 9]))



// Frequency Counter Example 2
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another. Such as cinema, formed from iceman.


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

console.log(validAnagram('racecar', 'carrace'))
