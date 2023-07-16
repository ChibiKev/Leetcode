class Solution {
  public String makeSmallestPalindrome(String s) {
    char[] result = s.toCharArray();
    for (int index = 0; index < result.length / 2; index++){
      char left = result[index];
      char right = result[result.length - 1 - index];
      if (left < right){
        result[result.length - 1 - index] = left;
      }
      else if (right < left){
        result[index] = right;
      }
    }
    return new String(result);
  }
}