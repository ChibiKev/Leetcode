class Solution {
  public int findTheLongestBalancedSubstring(String s) {
    int countZeros = 0;
    int countOnes = 0;
    int result = 0;
    for (int index = 0; index < s.length(); index++){
      char character = s.charAt(index);
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
}