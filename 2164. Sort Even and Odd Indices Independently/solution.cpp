class Solution {
public:
  vector<int> sortEvenOdd(vector<int>& nums) {
    vector<int> oddIndex;
    vector<int> evenIndex;
    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      if (index % 2 == 0){
        evenIndex.push_back(num);
      }
      else{
        oddIndex.push_back(num);
      }
    }
    
    sort(oddIndex.begin(), oddIndex.end());
    sort(evenIndex.begin(), evenIndex.end());

    vector<int> result;
    for (int index = 0; index < oddIndex.size(); index++){
      int even = evenIndex[index];
      int odd = oddIndex[oddIndex.size() - 1 - index];
      result.push_back(even);
      result.push_back(odd);
    }

    if (nums.size() % 2 != 0){
      result.push_back(evenIndex[evenIndex.size() - 1]);
    }

    return result;
  }
};