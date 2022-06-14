class Solution {
public:
  int mostFrequent(vector<int>& nums, int key) {
    unordered_map<int, int> dictionary;
    int count = 0;
    int result = nums[0];
    for (int index = 0; index < nums.size() - 1; index++){
      int num = nums[index];
      if (num == key){
        int nextNum = nums[index + 1];
        dictionary[nextNum]++;
        if (dictionary[nextNum] > count){
          count = dictionary[nextNum];
          result = nextNum;
        }
      }
    }

    return result;
  }
};