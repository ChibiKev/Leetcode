class Solution(object):
  def repeatedSubstringPattern(self, s):
    """
    :type s: str
    :rtype: bool
    """
    newS = s + s
    return newS[1:-1].find(s) != -1