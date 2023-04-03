class Solution {
public:
  bool hasAlternatingBits(int n) {
    uint32_t allOnes = n ^ (n >> 1);
    uint32_t powerOfTwo = allOnes + 1;
    return (powerOfTwo & allOnes) == 0;
  }
};