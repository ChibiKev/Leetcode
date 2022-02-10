class Solution {
  public void duplicateZeros(int[] arr) {
    int totalZeros = 0;
    for (int index = 0; index < arr.length; index++){
      int number = arr[index];
      if (number == 0){
        totalZeros += 1;
      }
    }

    for (int index = arr.length - 1; index > -1; index--){
      int number = arr[index];
      if (index + totalZeros < arr.length){
        arr[index + totalZeros] = number;
      }
      if (number == 0){
        totalZeros -= 1;
        if (index + totalZeros < arr.length){
          arr[index + totalZeros] = 0;
        }
      }
    }
  }
}