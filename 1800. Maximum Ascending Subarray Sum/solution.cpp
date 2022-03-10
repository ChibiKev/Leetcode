class Solution {
public:
  int maxAscendingSum(vector<int>& nums) {
    int maxValue = 0;
    int currentValue = 0;
    int lastValue = 0;
    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      if (currentValue > maxValue){
        maxValue = currentValue;
      }
      if (num <= lastValue){
        currentValue = 0;
      }
      currentValue += num;
      lastValue = num;
    }
    if (currentValue > maxValue){
      maxValue = currentValue;
    }
    return maxValue;
  }
};