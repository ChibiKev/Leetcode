class Solution {
  public String modifyString(String s) {
    for (int index = 0; index < s.length(); index++){
      if (s.charAt(index) == '?'){
        String word = "abc";
        for (int index2 = 0; index2 < word.length(); index2++){
          Character character = word.charAt(index2);
          if ((index == 0 || s.charAt(index - 1) != character) && (index + 1 == s.length() || s.charAt(index + 1) != character)){
            s = s.substring(0, index) + character + s.substring(index + 1, s.length());
            break;
          }
        }
      }
    }
    return s;
  }
}