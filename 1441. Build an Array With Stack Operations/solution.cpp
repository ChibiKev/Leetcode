class Solution {
public:
  vector<string> buildArray(vector<int>& target, int n) {
    int current = 1;
    vector<string> result;
    for (int index = 0; index < target.size(); index++){
      int num = target[index];
      if (num != current){
        int difference = num - current;
        for (int count = 0; count < difference; count++){
          result.push_back("Push");
          result.push_back("Pop");
        }
      }
      result.push_back("Push");
      current = num + 1;
    }
    return result;
  }
};