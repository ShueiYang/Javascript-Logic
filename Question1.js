//Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
// make a function that organizes these into individual array that is ordered. 
//For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].

const arrayNumb = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20] ; 

const cleantheRoom = (array) => {
  let sortArray = array.sort((a,b) => a - b);
  let storeArray = [] ;
  let finalArray = [] ; 
  sortArray.map((value, i) => {
    if (value === sortArray[i+1]) {
      storeArray.push(value)
    }
    else if (value === sortArray[i-1]) {
      storeArray.push(value);
      finalArray.push(storeArray);
      storeArray = [];
    }
    else {
      finalArray.push(value)
    }
  })
  console.log("after cleaning", finalArray); //after cleaning [[1, 1, 1, 1], [2, 2, 2], 4, 5, 10, [20, 20], 391, 392, 591]
}

//Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

const arrayBonus = [1, "2", "3", 2]

const cleanroombyType = (array) => {
  let arrayStr = [];
  let arrayNumb = [];
  let finalArray = [];
    array.map(value => {
        typeof value === 'number' ? arrayNumb.push(value) : arrayStr.push(value);
    })
  finalArray.push(arrayNumb, arrayStr);
  console.log(`Grouping same type together`)
  console.log(finalArray)                       // Grouping same type together  [[1, 2], ['2', '3']]
}
