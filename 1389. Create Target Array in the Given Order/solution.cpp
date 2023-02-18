class Solution {
public:
  vector<int> createTargetArray(vector<int>& nums, vector<int>& index) {
    vector<int> result(nums.size(), -1);
    for (int position = 0; position < nums.size(); position++){
      if (result[index[position]] != -1){
        for (int position2 = result.size() - 1; position2 > index[position]; position2--){
          result[position2] = result[position2 - 1];
        }
      }
      result[index[position]] = nums[position];
    }

    return result;
  }
};