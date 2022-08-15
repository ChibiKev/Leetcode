class Solution {
  public String reverseWords(String s) {
    String result = "";
    String word = "";
    for (int index = 0; index < s.length(); index++){
      Character letter = s.charAt(index);
      if (letter != ' '){
        word = letter + word;
      }
      if (letter == ' ' || index == s.length() - 1){
        result += word;
        if (index != s.length() - 1){
          result += " ";
        }
        word = "";
      }
    }

    return result;
  }
}