class Solution(object):
  def countBalls(self, lowLimit, highLimit):
    """
    :type lowLimit: int
    :type highLimit: int
    :rtype: int
    """
    dictionary = {}

    for num in range(lowLimit, highLimit + 1):
      total = 0
      for value in str(num):
        total += int(value)
        
      if total not in dictionary:
        dictionary[total] = 1
      else:
        dictionary[total] += 1

    highestCount = 0
    for key in dictionary:
      if dictionary[key] > highestCount:
        highestCount = dictionary[key]

    return highestCount