class Solution {
  public int hammingDistance(int x, int y) {
    int output = x ^ y;
    int count = 0;

    for (int index = 0; index < 32; index++){
      count += (output >> index) & 1;
    }

    return count;
  }
}