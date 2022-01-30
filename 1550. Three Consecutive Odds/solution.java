class Solution {
  public boolean threeConsecutiveOdds(int[] arr) {
    int count = 0;
    for (int i = 0; i < arr.length; i++){
      int number = arr[i];
      if (number % 2 == 1){
        count += 1;
        if (count == 3){
          return true;
        }
      }
      else{
        count = 0;
      }
    }

    return false;
  }
}