class Solution(object):
  def isValid(self, s):
    """
    :type s: str
    :rtype: bool
    """
    stack = []
    
    for bracket in s:
      if bracket == '(' or bracket == '[' or bracket == '{':
        stack.append(bracket)
      elif len(stack) == 0:
        return False
      elif bracket == ')' and stack[-1] == '(':
        stack.pop()
      elif bracket == ']' and stack[-1] == '[':
        stack.pop()
      elif bracket == '}' and stack[-1] == '{':
        stack.pop()
      else:
        return False
        
    return len(stack) == 0