class Solution {
  public int numberOfEmployeesWhoMetTarget(int[] hours, int target) {
    int count = 0;
    for (int index = 0; index < hours.length; index++){
      int hour = hours[index];
      if (hour >= target){
        count += 1;
      }
    }
    return count;
  }
}