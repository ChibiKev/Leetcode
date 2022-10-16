class Solution {
  public int countDaysTogether(String arriveAlice, String leaveAlice, String arriveBob, String leaveBob) {
    int[] months = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

    int arriveAliceDays = Integer.parseInt(arriveAlice.substring(3,5));
    for (int month = 0; month < Integer.parseInt(arriveAlice.substring(0,2)) - 1; month++){
      arriveAliceDays += months[month];
    }

    int leaveAliceDays = Integer.parseInt(leaveAlice.substring(3,5));
    for (int month = 0; month < Integer.parseInt(leaveAlice.substring(0,2)) - 1; month++){
      leaveAliceDays += months[month];
    }

    int arriveBobDays = Integer.parseInt(arriveBob.substring(3,5));
    for (int month = 0; month < Integer.parseInt(arriveBob.substring(0,2)) - 1; month++){
      arriveBobDays += months[month];
    }

    int leaveBobDays = Integer.parseInt(leaveBob.substring(3,5));
    for (int month = 0; month < Integer.parseInt(leaveBob.substring(0,2)) - 1; month++){
      leaveBobDays += months[month];
    }

    if (leaveAliceDays < arriveBobDays || leaveBobDays < arriveAliceDays){
      return 0;
    }
    
    int result = 1;
    if (leaveAliceDays > leaveBobDays){
      result += leaveBobDays;
    }
    else {
      result += leaveAliceDays;
    }

    if (arriveBobDays < arriveAliceDays){
      result -= arriveAliceDays;
    }
    else {
      result -= arriveBobDays;
    }

    return result;
  }
}