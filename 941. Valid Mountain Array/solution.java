class Solution {
  public boolean validMountainArray(int[] arr) {
    boolean increasing = false;
    boolean decreasing = false;
    for (int index = 1; index < arr.length; index++){
      int num = arr[index];
      if (arr[index - 1] < num && !decreasing){
        increasing = true;
      }
      else if (arr[index - 1] > num && increasing){
        decreasing = true;
      }
      else{
        return false;
      }
    }
    if (increasing && decreasing){
      return true;
    }
    return false;
  }
}