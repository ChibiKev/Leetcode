class Solution {
  public char nextGreatestLetter(char[] letters, char target) {
    if (target >= letters[letters.length - 1]){
      return letters[0];
    }

    for (int i = 0; i < letters.length; i++){
      char letter = letters[i];
      if (target < letter){
        return letter;
      }
    }
    return letters[0];
  }
}