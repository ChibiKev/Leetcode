class Solution {
public:
  int hammingDistance(int x, int y) {
    int output = x ^ y;
    int count = 0;

    while (output){
      if (output & 1){
        count++;
      }
      output = output >> 1;
    }

    return count;
  }
};