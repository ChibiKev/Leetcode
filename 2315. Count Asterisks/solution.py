class Solution(object):
  def countAsterisks(self, s):
    """
    :type s: str
    :rtype: int
    """
    count = 0
    otherCount = 0
    for value in s:
      if value == '|':
        otherCount += 1
      elif value == '*' and otherCount % 2 == 0:
        count += 1
    
    return count