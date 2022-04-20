class Solution {
  public int[] replaceElements(int[] arr) {
    int largest = -1;
    for (int index = arr.length - 1; index > -1; index--){
      int current = arr[index];
      arr[index] = largest;
      if (current > largest){
        largest = current;
      }
    }

    return arr;
  }
}