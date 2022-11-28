class Solution {
public:
  vector<int> getNoZeroIntegers(int n) {
    for (int index = 1; index <= n/2; index++){
      bool firstFound = false;
      int firstValue = index;
      while (firstValue > 0){
        if (firstValue % 10 == 0){
          firstFound = true;
        }
        firstValue /= 10;
      }
      
      bool secondFound = false;
      int secondValue = n - index;
      while (secondValue > 0){
        if (secondValue % 10 == 0){
          secondFound = true;
        }
        secondValue /= 10;
      }
      
      if (!firstFound && !secondFound){
        return {index, n - index};
      }
    }
    return {};
  }
};