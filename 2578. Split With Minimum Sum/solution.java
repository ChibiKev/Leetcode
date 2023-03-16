class Solution {
  public int splitNum(int num) {
    String stringNum = String.valueOf(num);
    char[] sortedNum = stringNum.toCharArray();
    Arrays.sort(sortedNum);
    
    String num1 = "";
    String num2 = "";
    for (int index = 0; index < stringNum.length(); index++){
      Character numValue = sortedNum[index];
      if (index % 2 == 0){
        num1 += numValue;
      }
      else{
        num2 += numValue;
      }
    }
        
    return Integer.parseInt(num1) + Integer.parseInt(num2);
  }
}