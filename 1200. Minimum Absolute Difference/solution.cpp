class Solution {
public:
  vector<vector<int>> minimumAbsDifference(vector<int>& arr) {
    int absoluteDifference = INT_MAX;
    vector<vector<int>> result;
    sort(arr.begin(), arr.end());
    for (int index = 0; index < arr.size() - 1; index++){
      if (arr[index + 1] - arr[index] < absoluteDifference){
        
        result = {{arr[index], arr[index + 1]}};
        absoluteDifference = arr[index + 1] - arr[index];
      }
      else if (arr[index + 1] - arr[index] == absoluteDifference){
        result.push_back({arr[index], arr[index + 1]});
      }
    }

    return result;
  }
};