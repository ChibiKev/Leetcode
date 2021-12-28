class Solution {
  public boolean isPrefixString(String s, String[] words) {
    String currentStructure = "";
    for (int i = 0; i < words.length; i++){
      currentStructure += words[i];
      if (currentStructure.equals(s)){
        return true;
      }
      if (currentStructure.length() > s.length()){
        break;
      }
    }
    return false;
  }
}