class Solution {
  public int maxLengthBetweenEqualCharacters(String s) {
    int[] letters = new int[26];
    int maxCount = -1;
    for (int index = 0; index < s.length(); index++){
      Character letter = s.charAt(index);
      int letterIndex = (int) letter - 97;
      if (letters[letterIndex] > 0){
        if (maxCount < index - letters[letterIndex]){
          maxCount = index - letters[letterIndex];
        }
      }
      else{
        letters[letterIndex] = index + 1;      
      }
    }

    return maxCount;
  }
}