class Solution {
public:
  vector<int> findDisappearedNumbers(vector<int>& nums) {
    for (int index = 0; index < nums.size(); index++){
      int newIndex = abs(nums[index]) - 1;
      nums[newIndex] = -abs(nums[newIndex]);
    }

    vector<int> result;
    for (int index = 0; index < nums.size(); index++){
      int value = nums[index];
      if (value > 0){
        result.push_back(index + 1);
      }
    }

    return result;
  }
};