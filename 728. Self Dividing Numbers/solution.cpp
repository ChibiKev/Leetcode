class Solution {
public:
  vector<int> selfDividingNumbers(int left, int right) {
    vector<int> result;
    for (int value = left; value < right + 1; value++){
      int number = value;
      bool divisible = true;
      while (number != 0){
        int digit = number % 10;
        if (digit == 0 || value % digit != 0){
          divisible = false;
          break;
        }
        number /= 10;
      }
      if (divisible){
        result.push_back(value);
      }
    }
    
    return result;
  }
};