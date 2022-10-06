class Solution(object):
  def cellsInRange(self, s):
    """
    :type s: str
    :rtype: List[str]
    """
    result = []
    
    for column in range(ord(s[0]), ord(s[3]) + 1):
      for row in range(ord(s[1]), ord(s[4]) + 1):
        result.append(chr(column) + chr(row))
    
    return result