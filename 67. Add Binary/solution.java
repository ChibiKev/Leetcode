class Solution {
  public String addBinary(String a, String b) {
    String result = "";
    int aIndex = a.length() - 1;
    int bIndex = b.length() - 1;
    int carry = 0;
    while (aIndex > -1 || bIndex > -1){
      int total = carry;
      if (aIndex > -1){
        total += a.charAt(aIndex) - '0';
      }
      if (bIndex > -1){
        total += b.charAt(bIndex) - '0';
      }
      aIndex -= 1;
      bIndex -= 1;
      if (total > 1){
        carry = 1;
      }
      else{
        carry = 0;
      }
      result += String.valueOf(total % 2);
    }

    if (carry != 0){
      result += String.valueOf(carry);
    }
    String reversedResult = "";
    for (int index = result.length() - 1; index >  -1; index--){
      reversedResult += result.charAt(index);
    }
    return reversedResult;
  }
}