class Solution(object):
  def removeOuterParentheses(self, s):
    """
    :type s: str
    :rtype: str
    """
    stack = []
    result = ""
    for character in s:
      if len(stack) == 0:
        stack.append(character)
      else:
        if character == "(":
          stack.append("(")
          result += "("
        else:
          stack.pop()
          if len(stack) != 0:
            result += ")"
    return result