class Solution {
  public String reverseStr(String s, int k) {
    String result = "";
    Boolean reversed = true;
    int start = 0;
    int end = k;
    while (start < s.length()){
      if (end > s.length()){
        end = s.length();
      }
      if (reversed){
        String newString = s.substring(start, end);
        String resultingString = "";
        for (int index = newString.length() - 1; index >  -1; index--){
          resultingString += newString.charAt(index);
        }
        result += resultingString;
      }
      else{
        result += s.substring(start, end);
      }
      reversed = !reversed;
      start += k;
      end += k;
    }

    return result;
  }
}