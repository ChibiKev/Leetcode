class Solution {
  public int countGoodTriplets(int[] arr, int a, int b, int c) {
    int sizeOfArr = arr.length;
    int count = 0;
    for (int i = 0; i < sizeOfArr - 2; i++){
      for (int j = i + 1; j < sizeOfArr - 1; j++){
        for (int k = j + 1; k < sizeOfArr; k++){
          if (Math.abs(arr[i] - arr[j]) <= a && Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c){
            count += 1;
          }
        }
      }
    }
    return count;
  }
}