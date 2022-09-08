class Solution {
  public String reformat(String s) {
    String digits = "";
    String alphas = "";

    for (int index = 0; index < s.length(); index++){
      Character value = s.charAt(index);
      if (Character.isDigit(value)){
        digits += value;
      }
      else if (Character.isLetter(value)){
        alphas += value;
      }
    }

    String result = "";
    
    if (Math.abs(digits.length() - alphas.length()) > 1){
      return result;
    }
    else if (digits.length() > alphas.length()){
      for (int index = 0; index < digits.length(); index++){
        result += digits.charAt(index);
        if (index < alphas.length()){
          result += alphas.charAt(index);        
        }
      }
    }
    else{
      for (int index = 0; index < alphas.length(); index++){
        result += alphas.charAt(index);
        if (index < digits.length()){
          result += digits.charAt(index);
        }
      }
    }

    return result;
  }
}