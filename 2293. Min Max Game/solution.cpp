class Solution {
public:
  int minMaxGame(vector<int>& nums) {
    if (nums.size() == 1){
      return nums[0];
    }

    vector<int> newNums;
    for (int index = 0; index < nums.size() / 2; index++){
      if (index % 2 == 0){
        newNums.push_back(min(nums[2 * index], nums[2 * index + 1]));
      }
      else{
        newNums.push_back(max(nums[2 * index], nums[2 * index + 1]));
      }
    }

    int result = minMaxGame(newNums);
    return result;
  }
};