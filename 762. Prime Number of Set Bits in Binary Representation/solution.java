class Solution {
  public int countPrimeSetBits(int left, int right) {
    Set<Integer> primes = new HashSet<>(Arrays.asList(2, 3, 5, 7, 11, 13, 17, 19, 23, 29));
    int count = 0;
    for (int index = left; index < right + 1; index++){
      int bits = 0;
      for (int value = index; value > 0; value >>= 1){
        bits += value & 1;
      }
      if (primes.contains(bits)){
        count += 1;
      }
    }
    return count;
  }
}