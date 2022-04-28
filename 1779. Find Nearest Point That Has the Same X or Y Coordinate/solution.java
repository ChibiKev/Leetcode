class Solution {
  public int nearestValidPoint(int x, int y, int[][] points) {
    double minDistance = Double.POSITIVE_INFINITY;
    int result = -1;
    for (int index = 0; index < points.length; index++){
      int point[] = points[index];
      int currentx = point[0];
      int currenty = point[1];
      if (currentx == x || currenty == y){
        int distance = Math.abs(currentx - x) + Math.abs(currenty - y);
        if (distance < minDistance){
          minDistance = distance;
          result = index;
        }
      }
    }
    return result;
  }
}