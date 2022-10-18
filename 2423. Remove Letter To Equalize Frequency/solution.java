class Solution {
  public boolean equalFrequency(String word) {
    int[] letters = new int[26];
    for (int index = 0; index < word.length(); index++){
      Character letter = word.charAt(index);
      letters[(int) letter - 97] += 1;
    }
    
    for (int index = 0; index < word.length(); index++){
      Character letter = word.charAt(index);
      letters[(int) letter - 97] -= 1;
      int amount = 0;
      boolean missing = true;
      for (int index2 = 0; index2 < letters.length; index2++){
        int value = letters[index2];
        if (value == 0){
          continue;
        }
        else if (amount == 0){
          amount = value;
        }
        else if (amount == value){
          continue;
        }
        else{
          missing = false;
          break;
        }
      }
      if (missing){
        return true;
      }
      letters[(int) letter - 97] += 1;
    }

    return false;
  }
}