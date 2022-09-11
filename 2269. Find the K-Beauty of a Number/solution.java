class Solution {
  public int divisorSubstrings(int num, int k) {
    String strNum = String.valueOf(num);
    int result = 0;

    for (int index = 0; index < strNum.length() - k + 1; index++){
      int value = Integer.parseInt(strNum.substring(index, index + k));
      if (value != 0 && num % value == 0){
        result += 1;
      }
    }

    return result;
  }
}