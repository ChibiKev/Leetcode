class Solution {
  public int alternateDigitSum(int n) {
    int result = 0;
    String nString =  String.valueOf(n);
    for (int index = 0; index < nString.length(); index++){
      char digit = nString.charAt(index);
      if (index % 2 == 0){
        result += (int) digit - '0';
      }
      else{
        result -= (int) digit - '0';
      }
    }
    return result;
  }
}