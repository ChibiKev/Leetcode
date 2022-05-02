class Solution {
public:
  vector<int> targetIndices(vector<int>& nums, int target) {
    int count = 0;
    int lessThanCount = 0;

    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      if (num == target){
        count += 1;
      }
      else if (num < target){
        lessThanCount += 1;
      }
    }

    vector<int> result;

    for (int amount = 0; amount < count; amount++){
      result.push_back(lessThanCount);
      lessThanCount += 1;
    }

    return result;
  }
};