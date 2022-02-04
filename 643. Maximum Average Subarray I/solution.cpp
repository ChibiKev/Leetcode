class Solution {
public:
  double findMaxAverage(vector<int>& nums, int k) {
    int maxSum = 0;
    for (int index = 0; index < k; index++){
      maxSum += nums[index];
    }

    int totalSum = maxSum;
    for (int index = k; index < nums.size(); index++){
      totalSum += nums[index] - nums[index - k];
      if (totalSum > maxSum){
        maxSum = totalSum;
      }
    }

    return (double)maxSum / k;
  }
};