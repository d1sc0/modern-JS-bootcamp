<<<<<<< HEAD
// Write a function to find the average value in an array of numbers
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2
=======
// Write a function to find the average value in an array of numbers
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2

//loop over each num
//add them up
//divide by lenght of nums

function avg(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    total += num; //add num to a total
  }

  return total / arr.length;
}

function avg(arr) {
  let total = 0;

  for (let num of arr) {
    total += num; //add num to a total
  }

  return total / arr.length;
}
>>>>>>> 971fb234c4ec75d64385b14aa6687f9030e9fff6
