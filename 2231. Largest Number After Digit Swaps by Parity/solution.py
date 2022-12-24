class Solution(object):
  def largestInteger(self, num):
    """
    :type num: int
    :rtype: int
    """
    evenNum = []
    oddNum = []
    for value in str(num):
      if int(value) % 2 == 0:
        evenNum.append(value)
      else:
        oddNum.append(value)
    evenNum.sort()
    oddNum.sort()
    
    result = ""
    for value in str(num):
      if int(value) % 2 == 0:
        result += evenNum.pop()
      else:
        result += oddNum.pop()

    return int(result)