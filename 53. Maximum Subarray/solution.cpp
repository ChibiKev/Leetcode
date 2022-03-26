class Solution {
public:
  int maxSubArray(vector<int>& nums) {
    int total = nums[0];
    int maxValue = nums[0];

    for (int index = 1; index < nums.size(); index++){
      int num = nums[index];
      int newAddition = 0;
      if (total > 0){
        newAddition = total;
      }
      total = num + newAddition;
      if (total > maxValue){
        maxValue = total;
      }
    }

    return maxValue;
  }
};