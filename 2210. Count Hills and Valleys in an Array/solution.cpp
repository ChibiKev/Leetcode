class Solution {
public:
  int countHillValley(vector<int>& nums) {
    vector<int> newNums {nums[0]};
    for (int index = 1; index < nums.size(); index++){
      int num = nums[index];
      if (newNums[newNums.size() - 1] != num){
        newNums.push_back(num);
      }
    }

    int count = 0;
    for (int index = 1; index < newNums.size() - 1; index++){
      int before = newNums[index - 1];
      int current = newNums[index];
      int after = newNums[index + 1];
      if (before < current && current > after){
        count += 1;
      }
      else if (before > current && current < after){
        count += 1;
      }
    }
    return count;
  }
};