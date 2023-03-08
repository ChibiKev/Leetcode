class Solution {
public:
  vector<int> separateDigits(vector<int>& nums) {
    vector<int> result;
    reverse(nums.begin(), nums.end());
    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      while (num != 0){
        int digit = num % 10;
        num /= 10;
        result.push_back(digit);
      }
    }
    
    reverse(result.begin(), result.end());
    return result;
  }
};