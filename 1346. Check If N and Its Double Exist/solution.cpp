class Solution {
public:
  bool checkIfExist(vector<int>& arr) {
    unordered_set<int> arrSet =unordered_set<int>(arr.begin(),arr.end());
    int zero = 0;
    for (int index = 0; index < arr.size(); index++){
      int num = arr[index];
      if (num == 0 && zero == 0){
        zero = 1;
        continue;
      }  
      if (arrSet.count(num * 2) == 1){
        return true;
      }
    }

    return false;
  }
};