class Solution(object):
  def daysBetweenDates(self, date1, date2):
    """
    :type date1: str
    :type date2: str
    :rtype: int
    """
    year1 = int(date1[0:4])
    month1 = int(date1[5:7])
    day1 = int(date1[8:10])
    
    if month1 < 3:
      month1 += 12
      year1 -= 1
    
    totalDays1 = 365 * year1 + year1 // 4 + year1 // 400 - year1 // 100 + day1 + (153 * month1 + 8) // 5
    
    year2 = int(date2[0:4])
    month2 = int(date2[5:7])
    day2 = int(date2[8:10])
    
    if month2 < 3:
      month2 += 12
      year2 -= 1
    
    totalDays2 = 365 * year2 + year2 // 4 + year2 // 400 - year2 // 100 + day2 + (153 * month2 + 8) // 5
    
    return abs(totalDays1 - totalDays2)