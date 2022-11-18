class Solution {
  public int minimumSum(int num) {
    String stringNum = String.valueOf(num);
    char[] chars = stringNum.toCharArray();
    Arrays.sort(chars);
    return (chars[0] - '0' + chars[1] - '0') * 10 + chars[2] - '0' + chars[3] - '0';  
  }
}