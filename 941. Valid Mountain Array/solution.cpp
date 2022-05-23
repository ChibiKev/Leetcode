class Solution {
public:
  bool validMountainArray(vector<int>& arr) {
    bool increasing = false;
    bool decreasing = false;
    for (int index = 1; index < arr.size(); index++){
      int num = arr[index];
      if (arr[index - 1] < num && !decreasing){
        increasing = true;
      }
      else if (arr[index - 1] > num && increasing){
        decreasing = true;
      }
      else{
        return false;
      }
    }
    if (increasing && decreasing){
      return true;
    }
    return false;
  }
};