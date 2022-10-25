class Solution {
public:
  int minimumOperations(vector<int>& nums) {
    sort(nums.begin(), nums.end());
    int total = 0;
    int count = 0;
    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      if( num - total == 0){
        continue;
      }
      else{
        total = num;
        count += 1;
      }
    }

    return count;
  }
};