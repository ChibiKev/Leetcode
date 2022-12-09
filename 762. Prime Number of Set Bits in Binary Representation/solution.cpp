class Solution {
public:
  int countPrimeSetBits(int left, int right) {
    unordered_set<int> primes = {2, 3, 5, 7, 11, 13, 17, 19, 23, 29};
    int count = 0;
    for (int index = left; index < right + 1; index++){
      int bits = 0;
      for (int value = index; value; value >>= 1){
        bits += value & 1;
      }
      if (primes.count(bits) == 1){
        count += 1;
      }
    }
    return count;
  }
};