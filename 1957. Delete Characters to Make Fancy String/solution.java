class Solution {
  public String makeFancyString(String s) {
    StringBuilder result = new StringBuilder();
    
    for (int index = 0; index < s.length(); index++){
      Character letter = s.charAt(index);
      if (result.length() > 1 && result.charAt(result.length() - 2) == result.charAt(result.length() - 1) && result.charAt(result.length() - 1) == letter){
        continue;        
      }
      result.append(letter);
    }
    
    return result.toString();
  }
}