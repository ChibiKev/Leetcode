class NumArray {
public:
  int numsSum = 0;
  
  NumArray(vector<int>& nums) {
   for (int index = 0; index < nums.size(); index++){
      numsSum += nums[index];
      dp.push_back(numsSum);
    } 
  }

  int sumRange(int left, int right) {
    int total = 0;
    if (left == 0){
      total = dp[right];
    }
    else{
      total = dp[right] - dp[left - 1];
    }
    return total;
  }
  
private:
  vector<int> dp;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray* obj = new NumArray(nums);
 * int param_1 = obj->sumRange(left,right);
 */