class Solution {
  public int countGoodRectangles(int[][] rectangles) {
    int count = 0;
    int maxLen = 0;
    for (int index = 0; index < rectangles.length; index++){
      int[] rectangle = rectangles[index];
      int minLen = rectangle[0];
      if (minLen > rectangle[1]){
        minLen = rectangle[1];
      }
      if (minLen > maxLen){
        maxLen = minLen;
        count = 1;
      }
      else if (minLen == maxLen){
        count += 1;
      }
    }

    return count;
  }
}