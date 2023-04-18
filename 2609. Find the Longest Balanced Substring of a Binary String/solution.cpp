class Solution {
public:
  int findTheLongestBalancedSubstring(string s) {
    int countZeros = 0;
    int countOnes = 0;
    int result = 0;
    for (int index = 0; index < s.size(); index++){
      char character = s[index];
      if (character == '0'){
        if (countOnes > 0){
          countZeros = 1;
          countOnes = 0;
        }
        else{
          countZeros += 1;
        }
      }
      else if (character == '1'){
        countOnes += 1;
      }
      
      int lowest = countZeros;
      if (lowest > countOnes){
        lowest = countOnes;
      }
      if (result < 2 * lowest){
        result = 2 * lowest;
      }
    }
    
    return result;
  }
};