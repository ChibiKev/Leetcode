class Solution {
public:
  uint32_t reverseBits(uint32_t n) {
    uint32_t result = 0;
    int index = 31;
    while (index > -1){
      result |= ((n >> index) & 1) << (31 - index);
      index -= 1;
    }
    return result;
  }
};