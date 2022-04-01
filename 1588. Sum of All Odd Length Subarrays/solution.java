class Solution {
  public int sumOddLengthSubarrays(int[] arr) {
    int total = 0;
    int arrLength = arr.length;
    for (int index = 0; index < arr.length; index++){
      int num = arr[index];
      int totalAdded = ((index + 1) * (arrLength - index) + 1) / 2;
      total += totalAdded * num;
    }
    return total;
  }
}