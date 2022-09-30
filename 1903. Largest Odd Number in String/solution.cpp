class Solution {
public:
  string largestOddNumber(string num) {
    for (int index = num.size() - 1; index > -1; index--){
      int value = num[index] - '0';
      if (value % 2 == 1){
        return num.substr(0, index + 1);
      }
    }

    return "";
  }
};