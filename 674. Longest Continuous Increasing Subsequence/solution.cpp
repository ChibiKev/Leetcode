class Solution {
public:
  int findLengthOfLCIS(vector<int>& nums) {
    int maxSub = 0;
    int counter = 1;
    for (int index = 1; index < nums.size(); index++){
      int prevNum = nums[index - 1];
      int num = nums[index];
      if (prevNum >= num){
        maxSub = max(maxSub, counter);
        counter = 1;
      }
      else{
        counter += 1;
      }
    }

    return max(maxSub, counter);
  }
};