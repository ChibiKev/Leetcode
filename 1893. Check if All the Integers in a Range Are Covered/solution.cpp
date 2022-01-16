class Solution {
public:
  bool isCovered(vector<vector<int>>& ranges, int left, int right) {
    sort(ranges.begin(), ranges.end());
        
    for(int i = 0; i < ranges.size(); i++){
      vector<int> range = ranges[i];
      if(range[0] <= left && left <= range[1]){
        left = range[1] + 1;
      }
      if(range[0] <= right && right <= range[1]){
        right = range[0] - 1;
      }

      if(right < left){
        return true;
      }
    }

    return false;
  }
};