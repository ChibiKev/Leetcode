class Solution(object):
  def checkPerfectNumber(self, num):
    """
    :type num: int
    :rtype: bool
    """
    if num == 1:
      return False

    total = 1
    for index in range(2, int(sqrt(num)) + 1):
      if num % index == 0:
        total += index + num / index
    
    return total == num