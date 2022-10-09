class Solution {
  public String digitSum(String s, int k) {
    String result = "";
    while(s.length() > k){
      int total = 0;
      for (int index = 0; index < s.length(); index++){
        Character value = s.charAt(index);
        if (index != 0 && index % k == 0){
          result += String.valueOf(total);
          total = 0;
        }
        total += (int) value - 48;
      }
      result += String.valueOf(total);
      s = result;
      result = "";
    }

    return s;
  }
}