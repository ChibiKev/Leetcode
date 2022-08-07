class Solution {
  public String licenseKeyFormatting(String s, int k) {
    String nonformatted = "";
    for (int index = 0; index < s.length(); index++){
      Character value = s.charAt(index);
      if (value != '-'){
        nonformatted += value;
      }
    }

    if (nonformatted.length() == 0){
      return "";
    }
    
    int amount = nonformatted.length() % k;
    if (nonformatted.length() % k == 0){
      amount = k;
    }

    String result = nonformatted.substring(0, amount);

    while (amount < nonformatted.length()){
      result += '-' + nonformatted.substring(amount, amount + k);
      amount += k;
    }

    return result.toUpperCase();
  }
}