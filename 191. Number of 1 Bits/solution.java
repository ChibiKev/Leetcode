public class Solution {
  // you need to treat n as an unsigned value
  public int hammingWeight(int n) {
    int total = 0;
    while (n != 0){
      total += n & 1;
      n = n >>> 1;
    }
    return total;
  }
}