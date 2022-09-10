class Solution(object):
  def maxScore(self, s):
    """
    :type s: str
    :rtype: int
    """
    ones = 0
    for number in s:
      if number == '1':
        ones += 1
        
    maxValue = 0
    zeros = 0
    for number in s[:-1]:
      if number == '0':
        zeros += 1
      elif number == '1':
        ones -= 1
      if maxValue < zeros + ones:
        maxValue = zeros + ones
        
    return maxValue