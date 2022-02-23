class Solution {
public:
  bool isOneBitCharacter(vector<int>& bits) {
    int index = 0;
    int bitsSize = bits.size() - 1;
    while (index < bitsSize){
      if (bits[index] == 1){
        index += 2;
      }
      else{
        index += 1;
      }
    }

    return index == bitsSize;
  }
};