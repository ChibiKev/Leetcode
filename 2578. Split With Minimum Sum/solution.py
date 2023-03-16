class Solution(object):
  def splitNum(self, num):
    """
    :type num: int
    :rtype: int
    """
    stringNum = str(num)
    sortedNum = sorted(stringNum)
    
    num1 = ""
    num2 = ""
    for index, numValue in enumerate(sortedNum):
      if index % 2 == 0:
        num1 += numValue
      else:
        num2 += numValue
        
    return int(num1) + int(num2)