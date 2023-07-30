class Solution {
public:
  bool isGood(vector<int>& nums) {
    unordered_map<int, int> dictionary;
    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      dictionary[num]++;
    }
      
    int n = nums.size() - 1;
    if (dictionary.count(n) == 0 || dictionary[n] != 2){
      return false;
    }
    
    for (auto num : dictionary){
      if (num.first == n){
        continue;
      }
      if (num.second > 1 || num.first > n){
        return false;
      }
    }
    return true;
  }
};