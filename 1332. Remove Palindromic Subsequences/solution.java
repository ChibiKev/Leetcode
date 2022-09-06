class Solution {
  public int removePalindromeSub(String s) {
    String reversedS = "";
    for (int index = s.length() - 1; index > -1; index--){
      reversedS += s.charAt(index);
    }
    
    if (s.equals("")){
      return 0;
    }
    else if (s.equals(reversedS)){
      return 1;
    }
    return 2;
  }
}