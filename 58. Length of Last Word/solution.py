class Solution(object):
  def lengthOfLastWord(self, s):
    """
    :type s: str
    :rtype: int
    """
    count = 0
    index = len(s) - 1
    while index > -1:
      if s[index] == ' ' and count > 0:
        break
      if s[index] != ' ':
        count += 1
      index -= 1
    return count