class Solution {
public:
  int maxDivScore(vector<int>& nums, vector<int>& divisors) {
    int divisibilityValue = divisors[0];
    int maxCount = 0;
    for (int index = 0; index < divisors.size(); index++){
      int divisor = divisors[index];
      int count = 0;
      for (int index2 = 0; index2 < nums.size(); index2++){
        int num = nums[index2];
        if (num % divisor == 0){
          count += 1;
        }
      }
      if (count > maxCount){
        divisibilityValue = divisor;
        maxCount = count;
      }
      else if (count == maxCount && divisor < divisibilityValue){
        divisibilityValue = divisor;
      }
    }
    return divisibilityValue;
  }
};