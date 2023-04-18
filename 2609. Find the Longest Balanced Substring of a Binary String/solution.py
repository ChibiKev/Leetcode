class Solution(object):
  def findTheLongestBalancedSubstring(self, s):
    """
    :type s: str
    :rtype: int
    """
    countZeros = 0
    countOnes = 0
    result = 0
    for character in s:
      if character == '0':
        if countOnes > 0:
          countZeros = 1
          countOnes = 0
        else:
          countZeros += 1
      elif character == '1':
        countOnes += 1
      
      lowest = countZeros
      if lowest > countOnes:
        lowest = countOnes
      if result < 2 * lowest:
        result = 2 * lowest
    
    return result