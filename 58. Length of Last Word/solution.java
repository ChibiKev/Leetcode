class Solution {
  public int lengthOfLastWord(String s) {
    int count = 0;
    int index = s.length() - 1;
    while (index > -1){
      if (s.charAt(index) == ' ' && count > 0){
        break;
      }
      if (s.charAt(index) != ' '){
        count += 1;
      }
      index -= 1;
    }
    return count;
  }
}