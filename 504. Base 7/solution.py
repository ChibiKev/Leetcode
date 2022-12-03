class Solution(object):
  def convertToBase7(self, num):
    """
    :type num: int
    :rtype: str
    """
    negative = num < 0
    num = abs(num)
    result = 0
    digit = 1
    while num != 0:
      result += (num % 7) * digit
      num /= 7
      digit *= 10
    
    if negative:
      result = "-" + str(result)
    else:
      result = str(result)
    
    return result