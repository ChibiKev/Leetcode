class Solution {
public:
  int numIdenticalPairs(vector<int>& nums) {
    unordered_map<int, int> dictionary;
    int count = 0;
    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      if (dictionary[num] > 0){
        count += dictionary[num];
        dictionary[num] += 1;
      }
      else{
        dictionary[num] = 1;
      }
    }
    return count;
  }
};