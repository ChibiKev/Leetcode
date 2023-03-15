class Solution {
public:
  vector<int> leftRigthDifference(vector<int>& nums) {
    int left = 0;
    int total = 0;
    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      total += num;
    }
    
    vector<int> answer;
    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      total -= num;
      int resultingSum = abs(left - total);
      answer.push_back(resultingSum);
      left += num;
    }
    
    return answer;
  }
};