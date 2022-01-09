class Solution {
  public boolean canMakeArithmeticProgression(int[] arr) {
    Arrays.sort(arr);
    int difference = arr[1] - arr[0];

    for (int index = 0; index < arr.length - 1; index++){
      int value = arr[index];
      int nextValue = arr[index + 1];
      if (nextValue - value != difference){
        return false;
      }
    }

    return true;
  }
}