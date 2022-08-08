class Solution {
  public int numOfStrings(String[] patterns, String word) {
    int count = 0;
    for (int index = 0; index < patterns.length; index++){
      String pattern = patterns[index];
      if (word.contains(pattern)){
        count += 1;
      }
    }

    return count;
  }
}