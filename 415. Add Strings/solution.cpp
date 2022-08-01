class Solution {
public:
  string addStrings(string num1, string num2) {
    int num1End = num1.size() - 1;
    int num2End = num2.size() - 1;
    int carry = 0;
    string result = "";

    while (num1End >= 0 || num2End >= 0 || carry == 1){
      int sum = 0;
      if (num1End >= 0){
        sum += num1[num1End] - '0';
        num1End -= 1;
      }

      if (num2End >= 0){
        sum += num2[num2End] - '0';
        num2End -= 1;
      }

      sum += carry;
      carry = sum / 10;
      sum = sum % 10;
      result =  result + to_string(sum);
    }

    reverse(result.begin(), result.end());
    return result;
  }
};