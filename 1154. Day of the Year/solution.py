class Solution(object):
  def dayOfYear(self, date):
    """
    :type date: str
    :rtype: int
    """
    calendar = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    year = int(date[0:4])
    month = int(date[5:7])
    day = int(date[8:10])
    
    result = 0
    
    if year % 4 == 0 and year != 1900 and month > 2:
      result += 1
    
    for amount in range(month - 1):
      result += calendar[amount]
      
    result += day
    
    return result