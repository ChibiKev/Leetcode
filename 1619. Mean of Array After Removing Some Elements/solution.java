class Solution {
  public double trimMean(int[] arr) {
    int fivePercent = arr.length / 20;
    int[] adjustedArr = arr.clone();
    Arrays.sort(adjustedArr);
    int totalSum = 0;
    for (int index = fivePercent; index < adjustedArr.length - fivePercent; index++){
      int num = adjustedArr[index];
      totalSum += num;
    }

    return (double) totalSum / (adjustedArr.length - (2 * fivePercent));
  }
}