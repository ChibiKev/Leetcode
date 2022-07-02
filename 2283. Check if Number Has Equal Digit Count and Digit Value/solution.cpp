class Solution {
public:
  bool digitCount(string num) {
    vector<int> myList(10, 0);
    for (int index = 0; index < num.size(); index++){
      int value = num[index] - '0';
      myList[value] += 1;
    }

    for (int index = 0; index < num.size(); index++){
      int value = num[index] - '0';
      if (myList[index] != value){
        return false;
      }
    }

    return true;
  }
};