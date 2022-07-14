// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


/* First quiz */
function sumOfNumbers(arrayOfNumbers) {
  let sum = 0;
  for (let i = 0; i <= arrayOfNumbers.length - 1; i++) {
    sum+= arrayOfNumbers[i];
  }
  return sum;
}

/* Second quiz */
function countEvenNumbers(arrayOfNumbers) {
  let count = 0;
  for (let j = 0; j <= arrayOfNumbers.length - 1 ; j++) {
    if (arrayOfNumbers[j] % 2 == 0) {
      count+= 1 ;      
    }
  }
  return count;    
}

/* Third quiz (optional) */
function celsiusToFahrenheit(arrayOfNumbers) {
  const arrayOfNumbers2 = [];
  for (let k = 0; k <= arrayOfNumbers.length - 1; k++) {
    arrayOfNumbers2[k] = Math.trunc(arrayOfNumbers[k] * 1.8 + 32)
  }
  return arrayOfNumbers2;
}



// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

