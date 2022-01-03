class Solution(object):
  def diStringMatch(self, s):
    """
    :type s: str
    :rtype: List[int]
    """
    result = []
    left = 0
    right = len(s)
    
    for letter in s:
      if letter == 'I':
        result.append(left)
        left += 1
      elif letter == 'D':
        result.append(right)
        right -= 1
    
    result.append(left)
        
    return result