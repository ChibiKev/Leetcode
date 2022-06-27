class Solution(object):
  def countBinarySubstrings(self, s):
    """
    :type s: str
    :rtype: int
    """
    current = 1
    previous = 0
    result = 0
    for index in range(1, len(s)):
      if s[index] == s[index - 1]:
        current += 1
      else:
        minimum = previous
        if previous > current:
          minimum = current
        result += minimum
        previous = current
        current = 1
    
    minimum = previous
    if previous > current:
      minimum = current
    return result + minimum