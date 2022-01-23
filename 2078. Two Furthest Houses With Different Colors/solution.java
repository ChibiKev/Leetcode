class Solution {
  public int maxDistance(int[] colors) {
    int furthestFromStart = colors.length - 1;
    int furthestFromEnd = 0;
    while (colors[furthestFromStart] == colors[0]){
      furthestFromStart -= 1;
    }
    while (colors[furthestFromEnd] == colors[colors.length - 1]){
      furthestFromEnd += 1;
    }       
    
    int max = colors.length - 1 - furthestFromEnd;
    if (max < furthestFromStart){
      max = furthestFromStart;
    }
    
    return max;
  }
}