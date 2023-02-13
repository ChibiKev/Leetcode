class Solution {
  public int balancedStringSplit(String s) {
    int count = 0;
    int result = 0;
    for (int index = 0; index < s.length(); index++){
      char letter = s.charAt(index);
      if (letter == 'R'){
        count += 1;
      }
      else{
        count -= 1;
      }
      if (count == 0){
        result += 1;
      }
    }
    return result;
  }
}