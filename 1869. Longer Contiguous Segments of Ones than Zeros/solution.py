class Solution(object):
  def checkZeroOnes(self, s):
    """
    :type s: str
    :rtype: bool
    """
    currentZeros = 0
    maxZeros = 0
    currentOnes = 0
    maxOnes = 0
    
    for number in s:
      if number == '0':
        currentZeros += 1
        currentOnes = 0
      elif number == '1':
        currentOnes += 1
        currentZeros = 0
        
      if maxZeros < currentZeros:
        maxZeros = currentZeros
        
      if maxOnes < currentOnes:
        maxOnes = currentOnes
          
    return maxOnes > maxZeros