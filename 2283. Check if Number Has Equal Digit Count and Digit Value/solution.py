class Solution(object):
  def digitCount(self, num):
    """
    :type num: str
    :rtype: bool
    """
    myList = [0] * 10
    for value in num:
      myList[int(value)] += 1
      
    for index, value in enumerate(num):
      if myList[index] != int(value):
        return False
      
    return True