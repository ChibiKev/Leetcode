class Solution {
public:
  string removeDigit(string number, char digit) {
    string result = "0";
    for (int index = 0; index < number.size(); index++){
      char value = number[index];
      if (value == digit){
        string temp = number.substr(0, index) + number.substr(index + 1);
        if (temp > result){
          result = temp;
        }
      }
    }
    return result;
  }
};