class Solution {
public:
  vector<int> applyOperations(vector<int>& nums) {
    for (int index = 0; index < nums.size() - 1; index++){
      int currentNum = nums[index];
      int nextNum = nums[index + 1];
      if (currentNum == nextNum){
        nums[index] = currentNum * 2;
        nums[index + 1] = 0;
      }
    }
    
    vector<int> result(nums.size(), 0);
    int currentIndex = 0;
    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      if (num != 0){
        result[currentIndex] = num;
        currentIndex += 1;
      }
    }
    return result;
  }
};