class Solution {
public:
  string removeTrailingZeros(string num) {
    int end = num.size();
    while (num[end - 1] == '0'){
      end -= 1;
    }
    return num.substr(0, end);
  }
};