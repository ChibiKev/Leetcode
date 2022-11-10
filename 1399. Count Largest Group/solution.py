class Solution(object):
  def countLargestGroup(self, n):
    """
    :type n: int
    :rtype: int
    """
    dictionary = {}

    for index in range(1, n + 1):
      total = 0
      for value in str(index):
        total += int(value)
        
      if total not in dictionary:
        dictionary[total] = 1
      else:
        dictionary[total] += 1
    
    totalCount = 0
    highestCount = 0
    for key in dictionary:
      if dictionary[key] > highestCount:
        highestCount = dictionary[key]
        totalCount = 1
      elif dictionary[key] == highestCount:
        totalCount += 1

    return totalCount