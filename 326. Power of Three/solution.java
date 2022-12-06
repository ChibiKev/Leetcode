class Solution {
  public boolean isPowerOfThree(int n) {
    return n > 0 && (Math.log10(n) / Math.log10(3)) == (int) (Math.log10(n) / Math.log10(3));
  }
}