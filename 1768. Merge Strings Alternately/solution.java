class Solution {
  public String mergeAlternately(String word1, String word2) {
    String result = "";
    int word1Index = 0;
    int word2Index = 0;
    while (word1Index < word1.length() || word2Index < word2.length()){
      if (word1Index < word1.length()){
        result += word1.charAt(word1Index);
      }
      if (word2Index < word2.length()){
        result += word2.charAt(word2Index);
      }
      word1Index += 1;
      word2Index += 1;
    }

    return result;
  }
}