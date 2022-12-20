class Solution(object):
  def totalMoney(self, n):
    """
    :type n: int
    :rtype: int
    """
    completedWeeks = n // 7
    remainingDays = n % 7
    completedWeekMoney = (completedWeeks * (2 * 28 + (completedWeeks - 1) * 7)) / 2
    remainingDaysMoney = (remainingDays * (2 * (completedWeeks + 1) + (remainingDays - 1))) / 2
    return completedWeekMoney + remainingDaysMoney