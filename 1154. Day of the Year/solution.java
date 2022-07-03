class Solution {
  public int dayOfYear(String date) {
    int[] calendar = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
    int year = Integer.parseInt(date.substring(0,4));
    int month = Integer.parseInt(date.substring(5,7));
    int day = Integer.parseInt(date.substring(8,10));

    int result = 0;

    if (year % 4 == 0 && year != 1900 && month > 2){
      result += 1;    
    }

    for (int amount = 0; amount < month - 1; amount++){
      result += calendar[amount];    
    }

    result += day;

    return result;
  }
}