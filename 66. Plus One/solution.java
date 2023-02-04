class Solution {
  public int[] plusOne(int[] digits) {
    for(int index = digits.length - 1; index > -1; index--) {
      digits[index] = (digits[index] + 1) % 10;
      if (digits[index] != 0){
        return digits;
      }
    }

    int result[] = new int[digits.length + 1];
    result[0] = 1;
    for (int index = 1; index < result.length; index++){
      result[index] = 0;
    }
    
    return result;
  }
}