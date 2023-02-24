class Solution(object):
  def maxDepth(self, s):
    """
    :type s: str
    :rtype: int
    """
    count = 0
    stack = 0
    for character in s:
      if character == '(':
        stack += 1
      elif character == ')':
        stack -= 1
      if stack > count:
        count = stack
    return count