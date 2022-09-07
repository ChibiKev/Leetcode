class Solution {
public:
  int daysBetweenDates(string date1, string date2) {
    int year1 = stoi(date1.substr(0,4));
    int month1 = stoi(date1.substr(5,7));
    int day1 = stoi(date1.substr(8,10));

    if (month1 < 3){
      month1 += 12;
      year1 -= 1;
    }

    int totalDays1 = 365 * year1 + (year1 / 4) + (year1 / 400) - (year1 / 100) + day1 + ((153 * month1 + 8) / 5);

    int year2 = stoi(date2.substr(0,4));
    int month2 = stoi(date2.substr(5,7));
    int day2 = stoi(date2.substr(8,10));

    if (month2 < 3){
      month2 += 12;
      year2 -= 1;
    }

    int totalDays2 = 365 * year2 + (year2 / 4) + (year2 / 400) - (year2 / 100) + day2 + ((153 * month2 + 8) / 5);

    return abs(totalDays1 - totalDays2);
  }
};