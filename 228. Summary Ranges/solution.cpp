class Solution {
public:
  vector<string> summaryRanges(vector<int>& nums) {
    vector<string> result;
    if (nums.size() == 0){
      return result;
    }

    int lastNum = nums[0];
    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      int nextNum = num;
      if (index != nums.size() - 1){
        nextNum = nums[index + 1];
        if (num + 1 == nextNum){
          continue;
        }
      }

      if (lastNum == num){
        result.push_back(to_string(num));
      }
      else{
        result.push_back(to_string(lastNum) + "->" + to_string(num));
      }
      lastNum = nextNum;
    }

    return result;
  }
};