class Solution {
  public int maximumUnits(int[][] boxTypes, int truckSize) {
    Arrays.sort(boxTypes, new java.util.Comparator<int[]>() {
      public int compare(int[] a, int[] b) {
        return Integer.compare(b[1], a[1]);
      }
    });
    int count = 0;
    int result = 0;
    for (int index = 0; index < boxTypes.length; index++){
      int[] box = boxTypes[index];
      if (count + box[0] < truckSize){
        result += box[0] * box[1];
        count += box[0];
      }
      else{
        result += (truckSize - count) * box[1];
        break;
      }
    }
    return result;
  }
}