class Solution {
public:
  int findMaxConsecutiveOnes(vector<int>& nums) {
    int maxNums = 0;
    int count = 0;
    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      if (num == 0){
        if (count > maxNums){
          maxNums = count;
        }
        count = 0;
      }
      else{
        count += 1;
      }
    }
    
    return max(maxNums, count);
  }
};