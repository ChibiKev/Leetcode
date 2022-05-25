class Solution {
  public int countPrefixes(String[] words, String s) {
    int count = 0;
    for (int index = 0; index < words.length; index++){
      String word = words[index];
      if (word.length() <= s.length()){
        if (word.equals(s.substring(0, word.length()))){
          count += 1;
        }
      }
    }

    return count;
  }
}