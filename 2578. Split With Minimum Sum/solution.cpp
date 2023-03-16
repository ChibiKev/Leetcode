class Solution {
public:
  int splitNum(int num) {
    string stringNum = to_string(num);
    sort(stringNum.begin(), stringNum.end());
    
    string num1 = "";
    string num2 = "";
    for (int index = 0; index < stringNum.size(); index++){
      char numValue = stringNum[index];
      if (index % 2 == 0){
        num1 += numValue;
      }
      else{
        num2 += numValue;
      }
    }
        
    return stoi(num1) + stoi(num2);
  }
};