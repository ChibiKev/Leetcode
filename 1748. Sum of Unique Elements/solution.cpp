class Solution {
public:
  int sumOfUnique(vector<int>& nums) {
    unordered_map<int, int> numsDictionary;
    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      numsDictionary[num]++;
    }

    int total = 0;
    for (auto num : numsDictionary){
      if (num.second == 1){
        total += num.first;
      }   
    }

    return total;
  }
};