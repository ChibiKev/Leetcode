class Solution(object):
  def minLength(self, s):
    """
    :type s: str
    :rtype: int
    """
    stack = []
    for letter in s:
      if letter == 'B' and len(stack) > 0 and stack[-1] == 'A':
        stack.pop()
      elif letter == 'D' and len(stack) > 0 and stack[-1] == 'C':
        stack.pop()
      else:
        stack.append(letter)
    return len(stack)