class Solution {
  public int xorOperation(int n, int start) {
    int result = start;
    for (int index = 1; index < n; index++){
      int value = start + 2 * index;
      result ^= value;
    }
    return result;
  }
}