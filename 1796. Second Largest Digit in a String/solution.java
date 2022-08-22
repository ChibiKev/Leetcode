class Solution {
  public int secondHighest(String s) {
    int firstMax = -1;
    int secondMax = -1;

    for (int index = 0; index < s.length(); index++){
      Character value = s.charAt(index);
      if (Character.isDigit(value)){
        int num = (int) value - 48;
        if (firstMax < num){
          secondMax = firstMax;
          firstMax = num;
        }
        else if (firstMax > num && secondMax < num){
          secondMax = num;
        }
      }
    }

    return secondMax;
  }
}