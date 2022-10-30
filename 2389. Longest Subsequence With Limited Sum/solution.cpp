class Solution {
public:
  vector<int> answerQueries(vector<int>& nums, vector<int>& queries) {
    sort(nums.begin(), nums.end());
    int total = 0;
    vector<int> sumList;
    for (int index = 0; index < nums.size(); index++){
      int num = nums[index];
      total += num;
      sumList.push_back(total);
    }
    
    vector<int> result(queries.size(), 0);
    for (int queriesIndex = 0; queriesIndex < queries.size(); queriesIndex++){
      int query = queries[queriesIndex];
      for (int sumIndex = 0; sumIndex < sumList.size(); sumIndex++){
        int sums = sumList[sumIndex];
        if (sums <= query){
          result[queriesIndex] = sumIndex + 1;
        }
      }
    }
        
    return result;
  }
};