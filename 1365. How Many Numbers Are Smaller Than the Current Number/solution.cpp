class Solution {
public:
  vector<int> smallerNumbersThanCurrent(vector<int>& nums) {
    unordered_map<int, int> dictionary;
    vector<int> sortedNums = nums;
    sort(sortedNums.begin(), sortedNums.end());
    for (int index = sortedNums.size() - 1; index > -1; index--){
      int num = sortedNums[index];
      dictionary[num] = index;
    }
    
    vector<int> result = nums;
    for (int index = 0; index < result.size(); index++){
      int num = result[index];
      result[index] = dictionary[num];
    }

    return result;
  }
};