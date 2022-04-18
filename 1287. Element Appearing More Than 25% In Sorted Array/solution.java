class Solution {
  public int findSpecialInteger(int[] arr) {
    int arrLength = arr.length;
    int split = arrLength / 4;

    for (int index = 0; index < arrLength - split; index++){
      int current = arr[index];
      int end = arr[index + split];
      if (current == end){
        return current;
      }
    }

    return -1;
  }
}