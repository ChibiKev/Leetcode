class Solution {
  public boolean canThreePartsEqualSum(int[] arr) {
    int left = arr[0];
    int right = arr[arr.length - 1];
    int total = 0;
    for (int index = 0; index < arr.length; index++){
      int num = arr[index];
      total += num;
    }

    if (total % 3 != 0){
      return false;
    }

    int leftIndex = 1;
    int rightIndex = arr.length - 2;
    int average = total / 3;
    while (leftIndex < rightIndex){
      if (leftIndex < rightIndex && left != average){
        left += arr[leftIndex];
        leftIndex += 1;
      }
      if (leftIndex < rightIndex && right != average){
        right += arr[rightIndex];
        rightIndex -= 1;
      }
      if (left == average && right == average){
        return true;
      }
    }
    return false;
  }
}