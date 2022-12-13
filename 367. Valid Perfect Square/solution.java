class Solution {
  public boolean isPerfectSquare(int num) {
    if (num == 1){
      return true;
    }
    
    int left = 1;
    int middle = num / 2;
    int right = num;
    
    while (left <= right){
      double squareroot = (double) num / (double) middle;
      if (squareroot == middle){
        return true;
      }
      else if (squareroot > middle){
        left = middle + 1;
      }
      else if (squareroot < middle){
        right = middle - 1;
      }
      middle = left + ((right - left) / 2);
    }

    return false;
  }
}