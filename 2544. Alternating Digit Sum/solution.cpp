class Solution {
public:
  int alternateDigitSum(int n) {
    int result = 0;
    string nString = to_string(n);
    for (int index = 0; index < nString.size(); index++){
      char digit = nString[index];
      if (index % 2 == 0){
        result += (int) digit - '0';
      }
      else{
        result -= (int) digit - '0';
      }
    }
    return result;
  }
};