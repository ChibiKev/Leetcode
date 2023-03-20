class Solution {
public:
  int minMaxDifference(int num) {
    char nonZero;
    char nonNine;

    string stringNum = to_string(num);
    for (int index = 0; index < stringNum.size(); index++){
      char numValue = stringNum[index];
      if (numValue != '0'){
        nonZero = numValue;
        break;
      }
    }

    for (int index = 0; index < stringNum.size(); index++){
      char numValue = stringNum[index];
      if (numValue != '9'){
        nonNine = numValue;
        break;
      }
    }

    string minNum = "";
    string maxNum = "";
    for (int index = 0; index < stringNum.size(); index++){
      char numValue = stringNum[index];
      if (numValue == nonZero){
        minNum += "0";
      }
      else{
        minNum += numValue;
      }
      if (numValue == nonNine){
        maxNum += "9";
      }
      else{
        maxNum += numValue;
      }
    }
    
    return stoi(maxNum) - stoi(minNum);
  }
};