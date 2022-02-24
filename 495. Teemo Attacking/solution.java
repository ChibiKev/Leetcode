class Solution {
  public int findPoisonedDuration(int[] timeSeries, int duration) {
    int totalTime = 0;
    int nextTime = 0;
    for (int index = 0; index < timeSeries.length; index++){
      int time = timeSeries[index];
      int subtractedTime = 0;
      if (time < nextTime){
        subtractedTime = nextTime - time;
      }
      nextTime = time + duration;
      totalTime += duration - subtractedTime;
    }

    return totalTime;
  }
}