class Solution {
public:
  int fillCups(vector<int>& amount) {
    int total = 0;
    int highestValue = 0;
    for (int index = 0; index < amount.size(); index++){
      int value = amount[index];
      total += value;
      if (value > highestValue){
        highestValue = value;
      }
    }

    int result = highestValue;
    if ((total + 1) / 2 > result){
      result = (total + 1) / 2;
    }

    return result;
  }
};