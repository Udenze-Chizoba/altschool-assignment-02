// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


function sumOfNumbers(arrayOfNumbers) {
  sum = 0;
  for (let i = 0; i <= arrayOfNumbers.length - 1; i++) {
    sum+= arrayOfNumbers[i];
  }
  return sum;
}
// assignment.sumOfNumbers = sumOfNumbers;


function countEvenNumbers(arrayOfNumbers) {
  count = 0;
  for (let j = 0; j <= arrayOfNumbers.length - 1 ; j++) {
    if (arrayOfNumbers[j] % 2 == 0) {
      count+= 1 ;      
    }
  }
    return count;    
}
// assignment.countEvenNumbers = countEvenNumbers;


function celsiusToFahrenheit(arrayOfNumbers) {
  const arrayOfNumbers2 = [];
  for (let k = 0; k <= arrayOfNumbers.length - 1; k++) {
    arrayOfNumbers2[k] = Math.trunc(arrayOfNumbers[k] *         1.8 + 32)
    
  }
    return arrayOfNumbers2;
}
// assignment.celsiusToFahrenheit = celsiusToFahrenheit;


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

