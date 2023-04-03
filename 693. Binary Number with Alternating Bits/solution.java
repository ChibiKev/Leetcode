class Solution {
  public boolean hasAlternatingBits(int n) {
    int allOnes = n ^ (n >> 1);
    int powerOfTwo = allOnes + 1;
    return (powerOfTwo & allOnes) == 0;
  }
}