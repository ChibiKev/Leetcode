class Solution {
  public int countGoodSubstrings(String s) {
    if (s.length() < 3){
      return 0;
    }

    int count = 0;
    String letters = s.substring(0, 2);
    for (int index = 2; index < s.length(); index++){
      letters += s.charAt(index);
      if (letters.charAt(0) != letters.charAt(1) && letters.charAt(1) != letters.charAt(2) && letters.charAt(2) != letters.charAt(0)){
        count += 1;
      }
      letters = letters.substring(1);
    }

    return count;
  }
}