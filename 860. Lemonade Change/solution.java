class Solution {
  public boolean lemonadeChange(int[] bills) {
    int fives = 0;
    int tens = 0;

    for (int index = 0; index < bills.length; index++){
      int bill = bills[index];
      if (bill == 5){
        fives += 1;
      }
      else if (bill == 10){
        fives -= 1;
        tens += 1;
      }
      else if (bill == 20 && tens > 0){
        fives -= 1;
        tens -= 1;
      }
      else{
        fives -= 3;
      }
      if (fives < 0 || tens < 0){
        return false;
      }
    }

    return true;
  }
}