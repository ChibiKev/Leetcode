class Solution(object):
  def commonFactors(self, a, b):
    """
    :type a: int
    :type b: int
    :rtype: int
    """
    count = 0
    lowest = a
    if lowest > b:
      lowest = b
    
    for index in range(1, lowest + 1):
      if (a % index == 0) and (b % index == 0):
        count += 1
    
    return count