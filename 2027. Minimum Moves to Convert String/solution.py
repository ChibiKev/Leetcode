class Solution(object):
  def minimumMoves(self, s):
    """
    :type s: str
    :rtype: int
    """
    index = 0
    count = 0
    
    while index < len(s):
      if s[index] == "X":
        count += 1
        index += 3
      else:
        index += 1
    
    return count