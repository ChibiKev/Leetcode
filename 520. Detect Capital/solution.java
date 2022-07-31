class Solution {
  public boolean detectCapitalUse(String word) {
    for (int index = 1; index < word.length(); index++){
      if (Character.isUpperCase(word.charAt(1)) != Character.isUpperCase(word.charAt(index)) || Character.isLowerCase(word.charAt(0)) && Character.isUpperCase(word.charAt(index))){
        return false;
      }
    }
    return true;
  }
}