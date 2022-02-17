class Solution {
  public int[] sumZero(int n) {
    int[] result = new int[n];
    int value = n/2;
    int start = 0;
    int end = n - 1;
    if (n % 2 == 1){
      result[start] = 0;
      start += 1;
    }
    for (int number = 1; number < value + 1; number++){
      result[start] = -number;
      result[end] = number;
      start += 1;
      end -= 1;
    }
    return result;
  }
}