class Solution {
public:
  int unequalTriplets(vector<int>& nums) {
    unordered_map<int, int> dictionary;
    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      dictionary[num]++;
    }

    int result = 0;
    int left = 0;
    int right = nums.size();
    for (auto num : dictionary){
      right -= num.second;
      result += left * num.second * right;
      left += num.second;
    }
    
    return result;
  }
};