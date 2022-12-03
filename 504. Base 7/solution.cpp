class Solution {
public:
  string convertToBase7(int num) {
    bool negative = num < 0;
    num = abs(num);
    int result = 0;
    int digit = 1;
    while (num != 0){
      result += (num % 7) * digit;
      num /= 7;
      digit *= 10;
    }

    string finalResult = "";
    if (negative){
      finalResult = "-" + to_string(result);
    }
    else{
      finalResult = to_string(result);
    }
    
    return finalResult;
  }
};