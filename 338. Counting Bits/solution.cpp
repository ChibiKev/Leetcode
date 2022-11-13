class Solution {
public:
  vector<int> countBits(int n) {
    vector<int> result;
    for (int index = 0; index < n + 1; index++){
      int total = 0;
      int num = index;
      
      while (num != 0){
        total += num % 2;
        num /= 2;
      }
      result.push_back(total);
    }

    return result;
  }
};