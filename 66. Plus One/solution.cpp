class Solution {
public:
  vector<int> plusOne(vector<int>& digits) {
    for(int index = digits.size() - 1; index > -1; index--) {
      digits[index] = (digits[index] + 1) % 10;
      if (digits[index] != 0){
        return digits;
      }
    }

    digits[0] = 1;
    digits.push_back(0);
    return digits;
  }
};