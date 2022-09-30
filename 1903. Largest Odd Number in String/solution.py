class Solution(object):
  def largestOddNumber(self, num):
    """
    :type num: str
    :rtype: str
    """
    for index in range(len(num) - 1, -1, -1):
      value = int(num[index])
      if value % 2 == 1:
        return num[0:index + 1]
        
    return ""