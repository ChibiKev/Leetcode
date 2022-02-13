class Solution {
public:
  int getMaximumGenerated(int n) {
    if (n < 2){
      return n;
    }

    vector<int> nums {0, 1};
    int maxValue = 1;
    int firstIndex = 1;
    int secondIndex = 1;
    for (int value = 2; value < n + 1; value++){
      if (value % 2 == 0){
        nums.push_back(nums[firstIndex]);
        firstIndex += 1;
      }
      else{
        nums.push_back(nums[secondIndex] + nums[secondIndex + 1]);
        secondIndex += 1;
      }
      if (nums[nums.size() - 1] > maxValue){
        maxValue = nums[nums.size() - 1];
      }
    }

    return maxValue;
  }
};