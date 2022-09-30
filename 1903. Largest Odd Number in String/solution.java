class Solution {
  public String largestOddNumber(String num) {
    for (int index = num.length() - 1; index > -1; index--){
      int value = num.charAt(index) - '0';
      if (value % 2 == 1){
        return num.substring(0, index + 1);
      }
    }

    return "";
  }
}