class Solution {
  public String removeDuplicates(String s) {
    String result = new String();
    for (int index = 0; index < s.length(); index++){
      Character letter = s.charAt(index);
      if (result.length() != 0 && letter == result.charAt(result.length() - 1)){
        result = result.substring(0, result.length() - 1);
      }
      else{
        result += letter;        
      }
    }
    return result;
  }
}