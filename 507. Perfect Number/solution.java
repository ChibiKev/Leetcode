class Solution {
  public boolean checkPerfectNumber(int num) {
    if (num == 1){
      return false;
    }

    int total = 1;
    for (int index = 2; index < (int) Math.sqrt(num) + 1; index++){
      if (num % index == 0){
        total += index + num / index;
      }
    }
    
    return total == num;
  }
}