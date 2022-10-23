class Solution {
public:
  vector<int> numberOfPairs(vector<int>& nums) {
    vector<int> result {0, 0};
    unordered_map<int, int> dictionary;
    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      dictionary[num]++;
    }

    for (auto num : dictionary){
      result[0] += num.second / 2;
      if (num.second % 2 == 1){
        result[1] += 1;
      }
    }

    return result;
  }
};