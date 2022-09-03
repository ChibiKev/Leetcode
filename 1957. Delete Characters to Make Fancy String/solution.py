class Solution(object):
  def makeFancyString(self, s):
    """
    :type s: str
    :rtype: str
    """
    result = []
    
    for letter in s:
      if len(result) > 1 and result[-2] == result[-1] and result[-1] == letter:
        continue
      result.append(letter)
    
    return "".join(result)