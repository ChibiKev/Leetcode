class Solution {
  public boolean isCovered(int[][] ranges, int left, int right) {
    Arrays.sort(ranges, new java.util.Comparator<int[]>() {
      public int compare(int[] a, int[] b) {
        return Integer.compare(a[0], b[0]);
      }
    });
    
    for(int i = 0; i < ranges.length; i++){
      int[] range = ranges[i];
      if (range[0] <= left && left <= range[1]){
        left = range[1] + 1;
      }
      if(range[0] <= right && right <= range[1]){
        right = range[0] - 1;
      }

      if(right < left){
        return true;
      }
    }

    return false;
  }
}