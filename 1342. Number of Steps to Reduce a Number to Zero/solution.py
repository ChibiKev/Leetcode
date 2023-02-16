class Solution(object):
  def numberOfSteps(self, num):
    """
    :type num: int
    :rtype: int
    """
    count = 0
    tempNumber = num

    while tempNumber > 0:
      if tempNumber % 2 == 0:
        tempNumber /= 2
      else:
        tempNumber -= 1
      count += 1
    
    return count