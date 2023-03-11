class Solution {
  public boolean isCircularSentence(String sentence) {
    String[] words = sentence.split(" ");
    for (int index = 0; index < words.length; index++){
      String word = words[index];
      char lastLetter = word.charAt(word.length() - 1);
      char firstLetter = words[(index + 1) % words.length].charAt(0);
      if (lastLetter != firstLetter){
        return false;
      }
    }
    
    return true;
  }
}