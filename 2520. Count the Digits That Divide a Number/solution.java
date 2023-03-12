class Solution {
  public int countDigits(int num) {
    int count = 0;
    int tempNum = num;
    while (tempNum != 0){
      int digit = tempNum % 10;
      if (num % digit == 0){
        count += 1;
      }
      tempNum /= 10;
    }
    return count;
  }
}