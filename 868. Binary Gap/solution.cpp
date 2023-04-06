class Solution {
public:
  int binaryGap(int n) {
    int lastOne = 32;
    int result = 0;
    for (int index = 0; index < 32; index++){
      if (n & (1 << index)){
        if (index - lastOne > result){
          result = index - lastOne;
        }
        lastOne = index;
      }
    }
    return result;
  }
};