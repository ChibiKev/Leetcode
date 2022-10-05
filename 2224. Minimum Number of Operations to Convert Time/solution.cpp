class Solution {
public:
  int convertTime(string current, string correct) {
    int currentHours = stoi(current.substr(0, 2));
    int currentMinutes = stoi(current.substr(3, 2));
    int correctHours = stoi(correct.substr(0, 2));
    int correctMinutes = stoi(correct.substr(3, 2));

    int count = correctHours - currentHours;
    int difference = 0;
    if (currentMinutes < correctMinutes){
      difference = correctMinutes - currentMinutes;
    }
    else if (currentMinutes > correctMinutes){
      count -= 1;
      difference = 60 - currentMinutes + correctMinutes;
    }

    if (floor(difference / 15) > 0){
      int amount = floor(difference / 15);
      count += amount;
      difference -= amount * 15;
    }
    if (floor(difference / 5) > 0){
      int amount = floor(difference / 5);
      count += amount;
      difference -= amount * 5;
    }
    if (floor(difference / 1) > 0){
      int amount = floor(difference / 1);
      count += amount;
      difference -= amount * 1;
    }

    return count;
  }
};