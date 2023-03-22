public class Solution {
  // you need treat n as an unsigned value
  public int reverseBits(int n) {
    int result = 0;
    int index = 31;
    while (index > -1){
      result |= ((n >> index) & 1) << (31 - index);
      index -= 1;
    }
    return result;
  }
}