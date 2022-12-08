class Solution {
  public int maximum69Number (int num) {
    String numString = String.valueOf(num);
    for (int index = 0; index < numString.length(); index++){
      Character value = numString.charAt(index);
      if (value == '6'){
        return Integer.parseInt(numString.substring(0, index) + '9' + numString.substring(index + 1));
      }
    }

    return num;
  }
}