class Solution {
public:
  vector<int> sortedSquares(vector<int>& nums) {
    vector<int> result(nums.size(), 0);

    int left = 0;
    int right = nums.size() - 1;

    while (left <= right){
      int leftValue = abs(nums[left]);
      int rightValue = abs(nums[right]);
      if (leftValue < rightValue){
        result[right - left] = rightValue * rightValue;
        right -= 1;
      }
      else{
        result[right - left] = leftValue * leftValue;
        left += 1;
      }
    }

    return result;
  }
};