class Solution {
  public String largestGoodInteger(String num) {
    String result = "";
    for (int index = 2; index < num.length(); index++){
      if (num.charAt(index - 2) == num.charAt(index - 1) && num.charAt(index - 1) == num.charAt(index)){
        if (result.equals("")){
          result = num.substring(index - 2, index + 1);
        }
        else if (Integer.parseInt(num.substring(index - 2, index + 1)) > Integer.parseInt(result)){
          result = num.substring(index - 2, index + 1);
        }
      }
    }
    
    return result;
  }
}