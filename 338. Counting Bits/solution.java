class Solution {
  public int[] countBits(int n) {
    int[] result = new int[n + 1];
    for (int index = 0; index < n + 1; index++){
      int total = 0;
      int num = index;
      
      while (num != 0){
        total += num % 2;
        num /= 2;
      }
      result[index] = total;
    }

    return result;
  }
}