class Solution(object):
  def secondHighest(self, s):
    """
    :type s: str
    :rtype: int
    """
    firstMax = -1
    secondMax = -1
    
    for value in s:
      if value.isnumeric():
        num = int(value)
        if firstMax < num:
          secondMax = firstMax
          firstMax = num
        elif firstMax > num and secondMax < num:
          secondMax = num
          
    return secondMax