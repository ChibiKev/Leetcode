class Solution(object):
  def findLHS(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    dictionary = {}
    for num in nums:
      if num not in dictionary:
        dictionary[num] = 1
      else:
        dictionary[num] += 1
        
    maxValue = 0
    for key in dictionary:
      if key + 1 in dictionary:
        count = dictionary[key] + dictionary[key + 1]
        if count > maxValue:
          maxValue = count
          
    return maxValue