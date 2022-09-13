class Solution {
  public boolean checkZeroOnes(String s) {
    int currentZeros = 0;
    int maxZeros = 0;
    int currentOnes = 0;
    int maxOnes = 0;

    for (int index = 0; index < s.length(); index++){
      Character number = s.charAt(index);
      if (number == '0'){
        currentZeros += 1;
        currentOnes = 0;
      }
      else if (number == '1'){
        currentOnes += 1;
        currentZeros = 0;
      }

      if (maxZeros < currentZeros){
        maxZeros = currentZeros;
      }

      if (maxOnes < currentOnes){
        maxOnes = currentOnes;
      }
    }

    return maxOnes > maxZeros;
  }
}