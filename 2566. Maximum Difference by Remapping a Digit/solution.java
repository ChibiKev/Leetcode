class Solution {
  public int minMaxDifference(int num) {
    Character nonZero = new Character('a');
    Character nonNine = new Character('a');

    String stringNum = String.valueOf(num);
    for (int index = 0; index < stringNum.length(); index++){
      Character numValue = stringNum.charAt(index);
      if (numValue != '0'){
        nonZero = numValue;
        break;
      }
    }

    for (int index = 0; index < stringNum.length(); index++){
      Character numValue = stringNum.charAt(index);
      if (numValue != '9'){
        nonNine = numValue;
        break;
      }
    }

    String minNum = "";
    String maxNum = "";
    for (int index = 0; index < stringNum.length(); index++){
      Character numValue = stringNum.charAt(index);
      if (numValue == nonZero){
        minNum += "0";
      }
      else{
        minNum += numValue;
      }
      if (numValue == nonNine){
        maxNum += "9";
      }
      else{
        maxNum += numValue;
      }
    }
    
    return Integer.parseInt(maxNum) - Integer.parseInt(minNum);
  }
}