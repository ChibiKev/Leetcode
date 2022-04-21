class Solution {
  public int[][] flipAndInvertImage(int[][] image) {
    int[][] result = new int[image.length][image[0].length];
    for (int row = 0; row < image.length; row++){
      for (int column = image[row].length - 1; column > -1; column--){
        int number = 0;
        if (image[row][column] == 0){
          number = 1;
        }
        result[row][image[row].length - 1 - column] = number;
      }
    }

    return result;
  }
}