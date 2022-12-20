class Solution {
  public int totalMoney(int n) {
    int completedWeeks = (n / 7);
    int remainingDays = n % 7;
    int completedWeekMoney = ((completedWeeks * (2 * 28 + (completedWeeks - 1) * 7)) / 2);
    int remainingDaysMoney = ((remainingDays * (2 * (completedWeeks + 1) + (remainingDays - 1))) / 2);
    return completedWeekMoney + remainingDaysMoney;
  }
}