class Solution {
  public boolean isSubsequence(String s, String t) {
    int sIndex = 0;

    for (int index = 0; index < t.length(); index++){
      Character letter = t.charAt(index);
      if (sIndex == s.length()){
        return true;
      }
      if (s.charAt(sIndex) == letter){
        sIndex += 1;
      }
    }

    return sIndex == s.length();
  }
}