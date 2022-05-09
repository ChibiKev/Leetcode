class Solution {
  public double largestTriangleArea(int[][] points) {
    double result = 0;
    for (int x = 0; x < points.length; x++){
      int[] i = points[x];
      for (int y = 0; y < points.length; y++){
        int[] j = points[y];
        for (int z = 0; z < points.length; z++){
          int[] k = points[z];
          double area = 0.5 * Math.abs(i[0] * j[1] + j[0] * k[1] + k[0] * i[1]- j[0] * i[1] - k[0] * j[1] - i[0] * k[1]);
          if (area > result){
            result = area;
          }
        }
      }
    }
    return result;
  }
}