class Solution {
public:
  int findComplement(int num) {
    int index = 1;
    while (num > index){
      index = (index << 1) | 1;
    }
    return num ^ index;
  }
};