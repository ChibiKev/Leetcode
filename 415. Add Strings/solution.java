class Solution {
  public String addStrings(String num1, String num2) {
    int num1End = num1.length() - 1;
    int num2End = num2.length() - 1;
    int carry = 0;
    String result = "";

    while (num1End >= 0 || num2End >= 0 || carry == 1){
      int sum = 0;
      if (num1End >= 0){
        sum += num1.charAt(num1End) - '0';
        num1End -= 1;
      }

      if (num2End >= 0){
        sum += num2.charAt(num2End) - '0';
        num2End -= 1;
      }

      sum += carry;
      carry = sum / 10;
      sum = sum % 10;
      result =  result + Integer.toString(sum);
    }
    
    String reversedResult = "";
    for (int index = result.length() - 1; index >  -1; index--){
      reversedResult += result.charAt(index);
    }
    return reversedResult;
  }
}