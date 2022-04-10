class Solution {
public:
  int arrayPairSum(vector<int>& nums) {
    sort(nums.begin(), nums.end());
    int total = 0;

    for (int index = 0; index < nums.size(); index += 2){
      total += nums[index];
    }

    return total;
  }
};