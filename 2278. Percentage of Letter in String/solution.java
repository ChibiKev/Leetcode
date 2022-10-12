class Solution {
  public int percentageLetter(String s, char letter) {
    double amount = 0.00;
    for (int index = 0; index < s.length(); index++){
      char value = s.charAt(index);
      if (value == letter){
        amount += 1;
      }
    }
    return (int) (amount / s.length() * 100);
  }
}