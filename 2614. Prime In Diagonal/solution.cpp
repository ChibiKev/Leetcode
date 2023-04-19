class Solution {
public:
  int diagonalPrime(vector<vector<int>>& nums) {
    int result = 0;
    for (int index = 0; index < nums.size(); index++){
      int diagonal = nums[index][index];
      bool diagonalPrime = true;
      if (diagonal < 2){
        diagonalPrime = false;
      }
      else{
        int squaredDiagonal = sqrt(diagonal);
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
      
      int secondDiagonal = nums[nums.size() - index - 1][index];
      bool secondDiagonalPrime = true;
      if (secondDiagonal < 2){
        secondDiagonalPrime = false;
      }
      else{
        int squaredSecondDiagonal = sqrt(secondDiagonal);
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
};