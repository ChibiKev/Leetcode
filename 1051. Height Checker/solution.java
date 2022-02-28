class Solution {
  public int heightChecker(int[] heights) {
    int[] sortedHeights = heights.clone();
    Arrays.sort(sortedHeights);
    int result = 0;
    for (int index = 0; index < heights.length; index++){
      if (sortedHeights[index] != heights[index]){
        result += 1;
      }
    }

    return result;
  }
}