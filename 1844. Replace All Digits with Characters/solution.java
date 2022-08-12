class Solution {
  public String replaceDigits(String s) {
    String result = "";
    for (int index = 0; index < s.length(); index++){
      Character value = s.charAt(index);
      if (index % 2 == 0){
        result += value;
      }
      else{
        result += (char)(s.charAt(index - 1) + value - '0');
      }
    }

    return result;
  }
}