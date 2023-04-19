class Solution {
  public int diagonalPrime(int[][] nums) {
    int result = 0;
    for (int index = 0; index < nums.length; index++){
      int diagonal = nums[index][index];
      boolean diagonalPrime = true;
      if (diagonal < 2){
        diagonalPrime = false;
      }
      else{
        int squaredDiagonal = (int) Math.sqrt(diagonal);
        for (int index2 = 2; index2 < squaredDiagonal + 1; index2++){
          if (diagonal % index2 == 0){
            diagonalPrime = false;
            break;
          }
        }
      }
      if (diagonalPrime && diagonal > result){
          result = diagonal;
      }
      
      int secondDiagonal = nums[nums.length - index - 1][index];
      boolean secondDiagonalPrime = true;
      if (secondDiagonal < 2){
        secondDiagonalPrime = false;
      }
      else{
        int squaredSecondDiagonal = (int) Math.sqrt(secondDiagonal);
        for (int index2 = 2; index2 < squaredSecondDiagonal + 1; index2++){
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
  }
}