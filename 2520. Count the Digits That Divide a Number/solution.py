class Solution(object):
  def countDigits(self, num):
    """
    :type num: int
    :rtype: int
    """
    count = 0
    tempNum = num
    while tempNum != 0:
      digit = tempNum % 10
      if num % digit == 0:
        count += 1
      tempNum /= 10
    return count