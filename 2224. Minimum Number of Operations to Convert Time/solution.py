class Solution(object):
  def convertTime(self, current, correct):
    """
    :type current: str
    :type correct: str
    :rtype: int
    """
    currentHours = int(current[0:2])
    currentMinutes = int(current[3:5])
    correctHours = int(correct[0:2])
    correctMinutes = int(correct[3:5])
    
    count = correctHours - currentHours
    difference = 0
    if currentMinutes < correctMinutes:
      difference = correctMinutes - currentMinutes
    elif currentMinutes > correctMinutes:
      count -= 1
      difference = 60 - currentMinutes + correctMinutes
    
    if difference / 15 > 0:
      amount = difference / 15
      count += amount
      difference -= amount * 15
    if difference / 5 > 0:
      amount = difference / 5
      count += amount
      difference -= amount * 5
    if difference / 1 > 0:
      amount = difference / 1
      count += amount
      difference -= amount * 1
      
    return count