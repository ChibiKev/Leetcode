class Solution(object):
  def findLucky(self, arr):
    """
    :type arr: List[int]
    :rtype: int
    """
    dictionary = {}
    for num in arr:
      if num not in dictionary:
        dictionary[num] = 1
      else:
        dictionary[num] += 1
    
    maxValue = -1
    for num in dictionary:
      if num == dictionary[num] and dictionary[num] > maxValue:
        maxValue = dictionary[num]
    return maxValue