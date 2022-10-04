class Solution(object):
  def checkString(self, s):
    """
    :type s: str
    :rtype: bool
    """
    return ''.join(sorted(s)) == s