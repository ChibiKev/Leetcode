class Solution {
public:
  vector<int> decompressRLElist(vector<int>& nums) {
    vector<int> result;
    for (int index = 0; index < nums.size() - 1; index += 2){
      int frequency = nums[index];
      int value = nums[index + 1];
      for (int amount = 0; amount < frequency; amount++){
        result.push_back(value);
      }
    }

    return result;
  }
};