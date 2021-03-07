
// A Timing Example
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
