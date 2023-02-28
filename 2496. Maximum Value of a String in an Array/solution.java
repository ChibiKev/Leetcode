class Solution {
  public int maximumValue(String[] strs) {
    int result = 0;
    for (int index = 0; index < strs.length; index++){
      String value = strs[index];
      int currentCount = value.length();
      Boolean isInt = true;
      for (int index2 = 0; index2 < value.length(); index2++){
        if (value.charAt(index2) - 'a' > 0 || value.charAt(index2) - 'a' == 0){
          isInt = false;
          break;
        }
      }
      if (isInt){
        currentCount = Integer.parseInt(value);
      }
      if (currentCount > result){
        result = currentCount;
      }
    }
    return result;
  }
}