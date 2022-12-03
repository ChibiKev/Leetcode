class Solution {
  public String convertToBase7(int num) {
    Boolean negative = num < 0;
    num = Math.abs(num);
    int result = 0;
    int digit = 1;
    while (num != 0){
      result += (num % 7) * digit;
      num /= 7;
      digit *= 10;
    }

    String finalResult = "";
    if (negative){
      finalResult = "-" + Integer.toString(result);
    }
    else{
      finalResult = Integer.toString(result);
    }
    
    return finalResult;
  }
}