class Solution {
  public String removeTrailingZeros(String num) {
    int end = num.length();
    while (num.charAt(end - 1) == '0'){
      end -= 1;
    }
    return num.substring(0, end);
  }
}