class Solution {
public:
  int bitwiseComplement(int n) {
    int index = 1;
    while (n > index){
      index = (index << 1) | 1;
    }
    return n ^ index;
  }
};