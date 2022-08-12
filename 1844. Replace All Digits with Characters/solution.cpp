class Solution {
public:
  string replaceDigits(string s) {
    string result = "";
    for (int index = 0; index < s.size(); index++){
      int value = s[index];
      if (index % 2 == 0){
        result += value;
      }
      else{
        result += char(int(s[index - 1]) + s[index] - '0');
      }
    }

    return result;
  }
};