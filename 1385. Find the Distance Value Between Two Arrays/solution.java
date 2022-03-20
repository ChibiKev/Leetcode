class Solution {
  public int findTheDistanceValue(int[] arr1, int[] arr2, int d) {
    Arrays.sort(arr1);
    Arrays.sort(arr2);
    int arr1Index = 0;
    int arr2Index = 0;
    int result = 0;
    while (arr1Index < arr1.length && arr2Index < arr2.length){
      int arr1Num = arr1[arr1Index];
      int arr2Num = arr2[arr2Index];
      if (Math.abs(arr1Num - arr2Num) > d){
        if (arr1Num >= arr2Num){
          arr2Index += 1;
          continue;
        }
        else{
          result += 1;
        }
      }
      arr1Index += 1;
    }

    result += arr1.length - arr1Index;
    return result;
  }
}