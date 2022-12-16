class Solution(object):
  def dayOfTheWeek(self, day, month, year):
    """
    :type day: int
    :type month: int
    :type year: int
    :rtype: str
    """
    weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    
    total = (((year - 1) / 4) * 366) + (((year - 1) - ((year - 1) / 4)) * 365) + day
    
    if year % 4 == 0 and year != 2100:
      months[1] += 1

    for index in range(month - 1):
      total += months[index]
    
    return weeks[(total - 1) % 7]