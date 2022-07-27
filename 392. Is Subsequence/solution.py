class Solution(object):
  def isSubsequence(self, s, t):
    """
    :type s: str
    :type t: str
    :rtype: bool
    """
    sIndex = 0
    
    for letter in t:
      if sIndex == len(s):
        return True
      if s[sIndex] == letter:
        sIndex += 1
      
    return sIndex == len(s)