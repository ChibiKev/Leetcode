class Solution(object):
  def checkRecord(self, s):
    """
    :type s: str
    :rtype: bool
    """
    A = 0
    L = 0
    
    for index, value in enumerate(s):
      if value == 'A':
        A += 1
      elif value == 'L' and L < 3:
        if index > 0 and s[index - 1] == 'L':
          L += 1
        else:
          L = 1
          
    return not A >= 2 and not L >= 3