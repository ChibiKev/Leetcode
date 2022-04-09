class Solution(object):
  def sumOfUnique(self, nums):
    """
    :type nums: List[int]
    :rtype: int
    """
    numsDictionary = {}
    for num in nums:
      if num in numsDictionary:
        numsDictionary[num] += 1
      else:
        numsDictionary[num] = 1
    
    total = 0
    for num in numsDictionary:
      if numsDictionary[num] == 1:
        total += num
        
    return total