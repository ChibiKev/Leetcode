class Solution {
  public boolean checkStraightLine(int[][] coordinates) {
    int x0 = coordinates[0][0];
    int y0 = coordinates[0][1];
    int x1 = coordinates[1][0];
    int y1 = coordinates[1][1];
    int dy = y1 - y0;
    int dx = x1 - x0;
    for (int index = 2; index < coordinates.length; index++){
      int x = coordinates[index][0];
      int y = coordinates[index][1];
      if (dx * (y - y1) != dy * (x - x1)){
        return false;
      }
    }

    return true;
  }
}