class Solution {
public:
  bool divideArray(vector<int>& nums) {
    unordered_map<int, int> dictionary;
    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      dictionary[num]++;
    }

    for (auto num : dictionary){
      if (num.second % 2 != 0){
        return false;
      }
    }

    return true;
  }
};