class Solution {
  public int minimumMoves(String s) {
    int index = 0;
    int count = 0;

    while (index < s.length()){
      if (s.charAt(index) == 'X'){
        count += 1;
        index += 3;
      }
      else{
        index += 1;      
      }
    }

    return count;
  }
}