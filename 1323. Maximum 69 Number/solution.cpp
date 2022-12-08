class Solution {
public:
  int maximum69Number (int num) {
    string numString = to_string(num);
    for (int index = 0; index < numString.size(); index++){
      char value = numString[index];
      if (value == '6'){
        return stoi(numString.substr(0, index) + '9' + numString.substr(index + 1));
      }
    }

    return num;
  }
};