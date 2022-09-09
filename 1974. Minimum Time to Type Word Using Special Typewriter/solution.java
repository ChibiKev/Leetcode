class Solution {
  public int minTimeToType(String word) {
    int result = word.length();
    Character point = 'a';
    
    for (int index = 0; index < word.length(); index++){
      Character letter = word.charAt(index);
      int minimum = Math.abs(((int) point - 97) - ((int) letter - 97));
      if (26 - Math.abs(((int) point - 97) - ((int) letter - 97)) < minimum){
        minimum = 26 - Math.abs(((int) point - 97) - ((int) letter - 97));
      }
      result += minimum;
      point = letter;
    }

    return result;
  }
}