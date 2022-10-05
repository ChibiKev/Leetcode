class Solution {
  public int convertTime(String current, String correct) {
    int currentHours = Integer.parseInt(current.substring(0, 2));
    int currentMinutes = Integer.parseInt(current.substring(3, 5));
    int correctHours = Integer.parseInt(correct.substring(0, 2));
    int correctMinutes = Integer.parseInt(correct.substring(3, 5));

    int count = correctHours - currentHours;
    int difference = 0;
    if (currentMinutes < correctMinutes){
      difference = correctMinutes - currentMinutes;
    }
    else if (currentMinutes > correctMinutes){
      count -= 1;
      difference = 60 - currentMinutes + correctMinutes;
    }

    if (Math.floor(difference / 15) > 0){
      double amount = Math.floor(difference / 15);
      count += amount;
      difference -= amount * 15;
    }
    if (Math.floor(difference / 5) > 0){
      double amount = Math.floor(difference / 5);
      count += amount;
      difference -= amount * 5;
    }
    if (Math.floor(difference / 1) > 0){
      double amount = Math.floor(difference / 1);
      count += amount;
      difference -= amount * 1;
    }

    return count;
  }
}