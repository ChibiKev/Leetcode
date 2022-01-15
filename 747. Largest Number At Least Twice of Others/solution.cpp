class Solution {
public:
  int dominantIndex(vector<int>& nums) {
    int maxValue = 0;
    int maxIndex = 0;
    for(int i = 0; i < nums.size(); i++){
      if(maxValue < nums[i]){
        maxValue = nums[i];
        maxIndex = i;
      }
    }

    for(int i = 0; i < nums.size(); i++){
      if (maxValue < nums[i] * 2 && maxValue != nums[i]){
        return -1;
      }
    }

    return maxIndex;
  }
};