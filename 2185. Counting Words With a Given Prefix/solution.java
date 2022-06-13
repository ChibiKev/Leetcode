class Solution {
  public int prefixCount(String[] words, String pref) {
    int count = 0;
    for (int index = 0; index < words.length; index++){
      String word = words[index];
      if (word.length() >= pref.length()){
        String prefix = word.substring(0, pref.length());
        if (prefix.equals(pref)){
          count += 1;
        }
      }
    }

    return count;
  }
}