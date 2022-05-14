class Solution {
public:
  vector<int> minSubsequence(vector<int>& nums) {
    sort(nums.begin(), nums.end());
    int total = 0;
    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      total += num;
    }

    vector<int> result;
    int resultTotal = 0;
    for (int index = nums.size() - 1; index > -1; index--){
      int num = nums[index];
      result.push_back(num);
      resultTotal += num;
      total -= num;
      if (resultTotal > total){
        break;
      }
    }

    return result;
  }
};