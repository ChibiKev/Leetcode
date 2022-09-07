class Solution {
  public int daysBetweenDates(String date1, String date2) {
    int year1 = Integer.parseInt(date1.substring(0,4));
    int month1 = Integer.parseInt(date1.substring(5,7));
    int day1 = Integer.parseInt(date1.substring(8,10));

    if (month1 < 3){
      month1 += 12;
      year1 -= 1;
    }

    int totalDays1 = 365 * year1 + (year1 / 4) + (year1 / 400) - (year1 / 100) + day1 + ((153 * month1 + 8) / 5);

    int year2 = Integer.parseInt(date2.substring(0,4));
    int month2 = Integer.parseInt(date2.substring(5,7));
    int day2 = Integer.parseInt(date2.substring(8,10));

    if (month2 < 3){
      month2 += 12;
      year2 -= 1;
    }

    int totalDays2 = 365 * year2 + (year2 / 4) + (year2 / 400) - (year2 / 100) + day2 + ((153 * month2 + 8) / 5);

    return Math.abs(totalDays1 - totalDays2);
  }
}