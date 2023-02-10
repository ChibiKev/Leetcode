class Solution {
  public List<Integer> selfDividingNumbers(int left, int right) {
    List<Integer> result = new ArrayList<Integer>();
    for (int value = left; value < right + 1; value++){
      int number = value;
      boolean divisible = true;
      while (number != 0){
        int digit = number % 10;
        if (digit == 0 || value % digit != 0){
          divisible = false;
          break;
        }
        number /= 10;
      }
      if (divisible){
        result.add(value);
      }
    }
    
    return result;
  }
}