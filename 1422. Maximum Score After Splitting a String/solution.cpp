class Solution {
public:
  int maxScore(string s) {
    int ones = 0;
    for (int index = 0; index < s.size(); index++){
      char number = s[index];
      if (number == '1'){
        ones += 1;
      }
    }

    int maxValue = 0;
    int zeros = 0;
    for (int index = 0; index < s.size() - 1; index++){
      char number = s[index];
      if (number == '0'){
        zeros += 1;
      }
      else if (number == '1'){
        ones -= 1;
      }
      if (maxValue < zeros + ones){
        maxValue = zeros + ones;
      }
    }

    return maxValue;
  }
};