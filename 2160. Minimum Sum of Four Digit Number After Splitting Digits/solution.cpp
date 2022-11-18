class Solution {
public:
  int minimumSum(int num) {
    string stringNum = to_string(num);
    sort(stringNum.begin(), stringNum.end());
    return (stringNum[0] - '0' + stringNum[1] - '0') * 10 + stringNum[2] - '0' + stringNum[3] - '0';
  }
};