//Question 2: Write a javascript function that takes an array of numbers and a target number. 
//The function should find two different numbers in the array that, when added together, give the target number.
// For example: answer([1,2,3], 4)should return [1,3]

const arraySum = [1,2,3,4,5,6,7] ; 

const sumNumber = (arr, target) => {
  let result = [];
  let pair = [];
  for (let i=0; i<arr.length; i++) {
    for(let j=i+1; j<arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        pair.push(arr[i], arr[j]);
        result.push(pair);
        pair = [];
      }
    }
  }
  return result.length === 0 ? `No match found` : result;
}
console.log(sumNumber(arraySum, 7));  // [1, 6],[2, 5],[3, 4]