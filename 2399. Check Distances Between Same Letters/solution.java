class Solution {
  public boolean checkDistances(String s, int[] distance) {
    for (int index = 0; index < s.length(); index++){
      Character letter = s.charAt(index);
      int letterIndex = (int) letter - 97;
      int distanceValue = distance[letterIndex];
      int nextValue = index + distanceValue + 1;
      if (s.length() <= nextValue){
        return false;
      }
      if (letter == s.charAt(nextValue)){
        distance[letterIndex] = -1;
      }
      else if (distance[letterIndex] != -1){
        return false;
      }
    }
    return true;
  }
}