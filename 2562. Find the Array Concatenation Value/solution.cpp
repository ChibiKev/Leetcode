class Solution {
public:
  long long findTheArrayConcVal(vector<int>& nums) {
    long result = 0;
    for (int index = 0; index < nums.size() / 2; index++){
      string concat = to_string(nums[index]) + to_string(nums[nums.size() - 1 - index]);
      result += stoi(concat);
    }
    
    if (nums.size() % 2 == 1){
      result += nums[nums.size() / 2];
    }
    
    return result;
  }
};