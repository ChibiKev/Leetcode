class Solution {
  public String dayOfTheWeek(int day, int month, int year) {
    String[] weeks = {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};
    int[] months = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
    
    int total = (((year - 1) / 4) * 366) + (((year - 1) - ((year - 1) / 4)) * 365) + day;
    
    if ((year % 4 == 0) && (year != 2100)){
      months[1] += 1;
    }
    
    for (int index = 0; index < month - 1; index++){
      total += months[index];
    }

    return weeks[(total - 1) % 7];
  }
}