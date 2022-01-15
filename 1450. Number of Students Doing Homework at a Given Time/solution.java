class Solution {
  public int busyStudent(int[] startTime, int[] endTime, int queryTime) {
    int totalLength = startTime.length;
    int count = 0;
    for(int i = 0; i < totalLength; i++){
      int start = startTime[i];
      int end = endTime[i];
      if (start <= queryTime && queryTime <= end){
        count += 1;
      }
    }

    return count;
  }
}