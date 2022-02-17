class Solution {
public:
  vector<int> sumZero(int n) {
    vector<int> result;
    int value = n/2;
    if (n % 2 == 1){
      result.push_back(0);
    }
    for (int number = 1; number < value + 1; number++){
      result.push_back(-number);
      result.push_back(number);
    }
    return result;
  }
};