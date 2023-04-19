/**
 * @param {number[][]} nums
 * @return {number}
 */
var diagonalPrime = function(nums) {
  let result = 0;
  for (let index = 0; index < nums.length; index++){
    let diagonal = nums[index][index];
    let diagonalPrime = true;
    if (diagonal < 2){
      diagonalPrime = false;
    }
    else{
      let squaredDiagonal = Math.floor(Math.sqrt(diagonal));
      for (let index2 = 2; index2 < squaredDiagonal + 1; index2++){
        if (diagonal % index2 == 0){
          diagonalPrime = false;
          break;
        }
      }
    }
    if (diagonalPrime && diagonal > result){
      result = diagonal;
    }
    
    let secondDiagonal = nums[nums.length - index - 1][index];
    let secondDiagonalPrime = true;
    if (secondDiagonal < 2){
      secondDiagonalPrime = false;
    }
    else{
      let squaredSecondDiagonal = Math.floor(Math.sqrt(secondDiagonal));
      for (let index2 = 2; index2 < squaredSecondDiagonal + 1; index2++){
        if (secondDiagonal % index2 == 0){
          secondDiagonalPrime = false;
          break;
        }
      }
    }
    if (secondDiagonalPrime && secondDiagonal > result){
      result = secondDiagonal;
    }
  }
  return result;
};