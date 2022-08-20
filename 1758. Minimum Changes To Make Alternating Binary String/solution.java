class Solution {
  public int minOperations(String s) {
    Character current = s.charAt(0);
    int count = 0;
    for (int index = 0; index < s.length(); index++){
      Character number = s.charAt(index);
      if (current != number){
        count += 1;
      }
      if (current == '0'){
        current = '1';
      }
      else{
        current = '0';
      }
    }

    if (s.length() - count < count){
      count = s.length() - count;
    }

    return count;
  }
}