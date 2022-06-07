class Solution {
  public int minTimeToVisitAllPoints(int[][] points) {
    int distance = 0;
    for (int index = 1; index < points.length; index++){
      int most = Math.abs(points[index][0] - points[index - 1][0]);
      if (Math.abs(points[index][1] - points[index - 1][1]) > most){
        most = Math.abs(points[index][1] - points[index - 1][1]);
      }
      distance += most;
    }
    return distance;
  }
}